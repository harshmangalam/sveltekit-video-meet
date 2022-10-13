<script>
  import CreateRoom from "$lib/components/CreateRoom.svelte";
  import JoinRoom from "$lib/components/JoinRoom.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>


<svelte:head>
  <title>Home | Video Call</title>
</svelte:head>
<div class="min-h-screen  dark:bg-gray-900 p-4 dark:text-gray-200">
  <Navbar />
  <main class="py-8">
    <section class="bg-white dark:bg-gray-900">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-3xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Open source one to one video call.
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
           An open source video calling web app build with sveltekit, socketio and tailwindcss
          </p>

          <div class="flex items-center gap-4 flex-col sm:flex-row">
            <CreateRoom />
            <JoinRoom />
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="hero.svg" alt="mockup" />
        </div>
      </div>
    </section>
  </main>
</div>
