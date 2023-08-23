<script>
  import CreateRoom from "./create-room.svelte";
  import JoinRoom from "./join-room.svelte";
</script>

<div class="hero bg-base-100 py-10">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="max-w-lg w-full sm:mb-8">
      <img src="hero.svg" alt="mockup" />
    </div>
    <div>
      <div class="text-3xl lg:text-5xl text-center lg:text-start">
        <h1>Open source video meetings.</h1>
      </div>
      <p class="py-6 text-lg text-center lg:text-start">
        An open source and free to use one-to-one private video calling web app
        build with sveltekit.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 lg:mt-0">
        <CreateRoom />
        <JoinRoom />
      </div>
    </div>
  </div>
</div>
