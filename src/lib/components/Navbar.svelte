<script>
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import VideoIcon from "$lib/icons/VideoIcon.svelte";
</script>

<nav class="navbar bg-base-100">
  <div class="flex-1 flex items-center gap-2">
    <VideoIcon size={32} />
    <h1 class="text-xl font-bold">Svelte Meet</h1>
  </div>
  <div class="flex-none">
    <a
      title="Github repo"
      href="https://github.com/harshmangalam/sveltekit-video-meet"
      target="_blank"
      class="btn btn-square btn-ghost"><GithubIcon /></a
    >
  </div>
</nav>
