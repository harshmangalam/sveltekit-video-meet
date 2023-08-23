import { sveltekit } from "@sveltejs/kit/vite";
import { Server } from "socket.io";
import type { PluginOption, UserConfig } from "vite";

const socketioServer: PluginOption = {
  name: "socketioServer",
  configureServer(server) {
    if (server.httpServer) {
      const io = new Server(server.httpServer);

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
    }
  },
};

const config: UserConfig = {
  plugins: [sveltekit(), socketioServer],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
};

export default config;
