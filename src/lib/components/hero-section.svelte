<script>
  import CreateRoom from "./create-room.svelte";
  import JoinRoom from "./JoinRoom.svelte";
</script>

<div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="max-w-lg w-full">
      <img src="hero.svg" alt="mockup" />
    </div>
    <div>
      <div class="text-5xl">
        <h1>Open source video meetings.</h1>
        <h1>Now free for everyone.</h1>
      </div>
      <p class="py-6 text-lg">
        An open source and free to use one-to-one private video calling web app
        build with sveltekit.
      </p>
      <div class="flex items-center gap-4 flex-col sm:flex-row">
        <CreateRoom />
        <JoinRoom />
      </div>
    </div>
  </div>
</div>
