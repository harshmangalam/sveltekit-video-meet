<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { io, Socket } from "socket.io-client";
  import Video from "$lib/components/video.svelte";
  import { goto } from "$app/navigation";
  import IncommingCall from "$lib/components/incomming-call.svelte";
  import RemoteUsersModal from "$lib/components/remote-users-modal.svelte";
  import RoomInfo from "$lib/components/room-info.svelte";

  export let data: { roomId: string };

  let users: string[] = [];
  let peer: RTCPeerConnection;
  let socket: Socket;
  let remoteUser: string;
  let currentUser: string;
  let userStream: MediaStream;
  let remoteStream: MediaStream;

  let isIncommingCall = false;
  let incommingPayload: any;

  let isCallAccepted = false;

  let isUserCameraOn = true;
  let isUserMicOn = true;

  $: connectedUsers = users.filter((user) => user !== currentUser);

  onDestroy(() => {
    stopMediaTracks();
  });
  onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    userStream = stream;
  });
  onMount(() => {
    socket = io();

    socket.on("connect", () => {
      currentUser = socket.id;
    });
    socket.emit("join-room", data.roomId);

    socket.on("users", (data) => {
      users = data;
    });

    socket.on("user-joined", (userID) => {
      users = [...users, userID];
    });

    socket.on("user-left", (userID) => {
      users = users.filter((user) => user !== userID);
    });

    socket.on("offer", (data) => {
      isIncommingCall = true;
      incommingPayload = data;
      remoteUser = data.caller;
    });
    socket.on("answer", handleAnswer);
    socket.on("ice-candidate", handleNewICECandidateMsg);
    socket.on("end-call", handleRemoteCallEnd);
  });
  const handleCall = (userID: string) => {
    callUser(userID);
    remoteUser = userID;
  };
  function createPeer(userID: string) {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.stunprotocol.org",
        },
        {
          urls: "turn:numb.viagenie.ca",
          credential: "muazkh",
          username: "webrtc@live.com",
        },
      ],
    });

    peer.onicecandidate = handleICECandidateEvent;
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

    return peer;
  }
  function callUser(userID: string) {
    peer = createPeer(userID);
    userStream.getTracks().forEach((track) => peer.addTrack(track, userStream));
  }
  function handleNegotiationNeededEvent(userID: string) {
    peer
      .createOffer()
      .then((offer) => {
        console.log(offer);
        return peer.setLocalDescription(offer);
      })
      .then(() => {
        const payload = {
          target: userID,
          caller: socket.id,
          sdp: peer.localDescription,
        };
        socket.emit("offer", payload);
      })
      .catch((e) => console.log(e));
  }
  function handleRejectCall() {
    isIncommingCall = false;
    incommingPayload = null;
    remoteUser = "";
  }
  function handleRecieveCall() {
    console.log("incomming offer", incommingPayload);
    peer = createPeer(remoteUser);
    const desc = new RTCSessionDescription(incommingPayload.sdp);

    peer
      .setRemoteDescription(desc)
      .then(() => {
        userStream
          .getTracks()
          .forEach((track) => peer.addTrack(track, userStream));
      })
      .then(() => {
        return peer.createAnswer();
      })
      .then((answer) => {
        console.log(answer);
        return peer.setLocalDescription(answer);
      })
      .then(() => {
        const payload = {
          target: incommingPayload.caller,
          caller: socket.id,
          sdp: peer.localDescription,
        };
        socket.emit("answer", payload);
        isIncommingCall = false;
        incommingPayload = null;
        isCallAccepted = true;
      });
  }
  function handleAnswer(message: any) {
    console.log("incomming answer", message);
    remoteUser = message.caller;
    const desc = new RTCSessionDescription(message.sdp);
    peer.setRemoteDescription(desc).catch((e) => console.log(e));
    isCallAccepted = true;
  }
  function handleICECandidateEvent(e: RTCPeerConnectionIceEvent) {
    if (e.candidate) {
      console.log("ice", e.candidate);
      const payload = {
        target: remoteUser,
        candidate: e.candidate,
      };
      socket.emit("ice-candidate", payload);
    }
  }
  function handleNewICECandidateMsg(incoming: any) {
    console.log("incomming ice", incoming);
    const candidate = new RTCIceCandidate(incoming);

    peer.addIceCandidate(candidate).catch((e) => console.log(e));
  }
  function handleTrackEvent(e: RTCTrackEvent) {
    console.log("remote track", e.streams);
    remoteStream = e.streams[0];
  }
  function handleHangUp() {
    socket.emit("end-call", {
      from: socket.id,
      to: remoteUser,
    });
    stopMediaTracks();
    isCallAccepted = false;
    remoteUser = "";
    goto("/");
  }
  function handleRemoteCallEnd(data: any) {
    stopMediaTracks();
    console.log(userStream.active);
    console.log(remoteStream.active);
    isCallAccepted = false;
    remoteUser = "";
    goto("/");
  }
  function stopMediaTracks() {
    if (remoteStream?.active) {
      const tracks = remoteStream.getTracks();
      for (const track of tracks) {
        track.stop();
      }
    }

    if (userStream?.active) {
      const tracks = userStream.getTracks();
      for (const track of tracks) {
        track.stop();
      }
    }
  }
  function toggleCamera() {
    const tracks = userStream.getVideoTracks();
    tracks[0].enabled = !tracks[0].enabled;
    isUserCameraOn = tracks[0].enabled;
  }
  function toggleMic() {
    const tracks = userStream.getAudioTracks();
    tracks[0].enabled = !tracks[0].enabled;
    isUserMicOn = tracks[0].enabled;
  }
</script>

<svelte:head
  ><title>
    Room | {data.roomId}
  </title></svelte:head
>

<RoomInfo />
<div class="pb-4 flex justify-end gap-2">
  <RemoteUsersModal
    on:calluser={(ev) => callUser(ev.detail.user)}
    users={connectedUsers}
    room={data.roomId}
  />
</div>

<!-- incomming call  -->

{#if isIncommingCall}
  <IncommingCall
    caller={incommingPayload.caller}
    on:receivecall={handleRecieveCall}
    on:rejectcall={handleRejectCall}
  />
{/if}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Video isCurrentUser={true} user={currentUser} stream={userStream} />
  <Video user={remoteUser} stream={remoteStream} />
</div>

{#if isCallAccepted}
  <div
    class="flex items-center justify-center space-x-2 absolute bottom-0 left-0 right-0 p-4"
  >
    <button
      class="btn btn-error btn-circle"
      on:click={handleHangUp}
      title="Hangup"
    >
      <iconify-icon width={24} height={24} icon="fluent:call-28-regular" />
    </button>

    <button
      class={"btn btn-circle"}
      title="Toggle camera"
      class:btn-error={!isUserCameraOn}
      on:click={toggleCamera}
    >
      {#if isUserCameraOn}
        <iconify-icon width={24} height={24} icon="carbon:video" />
      {:else}
        <iconify-icon width={24} height={24} icon="carbon:video-off" />
      {/if}
    </button>
    <button
      class="btn btn-circle"
      class:btn-error={!isUserMicOn}
      title="Toggle mic"
      on:click={toggleMic}
    >
      {#if isUserMicOn}
        <iconify-icon width={24} height={24} icon="fluent:mic-32-regular" />
      {:else}
        <iconify-icon width={24} height={24} icon="fluent:mic-off-32-regular" />
      {/if}
    </button>
  </div>
{/if}
