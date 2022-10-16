// server.js
import http from "http";
import { handler } from "./build/handler.js";
import express from "express";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

// Inject SocketIO

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("join-room", async (roomID) => {
    socket.join(roomID);
    const users = await io.in(roomID).allSockets();
    socket.to(roomID).emit("user-joined", socket.id);
    socket.emit("users", [...users]);
  });

  socket.on("offer", (payload) => {
    io.to(payload.target).emit("offer", payload);
  });

  socket.on("answer", (payload) => {
    io.to(payload.target).emit("answer", payload);
  });

  socket.on("ice-candidate", (incoming) => {
    io.to(incoming.target).emit("ice-candidate", incoming.candidate);
  });

  socket.on("end-call", (data) => {
    io.to(data.to).emit("end-call", data);
  });

  socket.on("disconnecting", (reason) => {
    for (const room of socket.rooms) {
      if (room !== socket.id) {
        socket.to(room).emit("user-left", socket.id);
      }
    }
  });
});

// SvelteKit handlers
app.use(handler);

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
