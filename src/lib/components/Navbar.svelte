<script>
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import VideoIcon from "$lib/icons/VideoIcon.svelte";
</script>

<nav class="w-full px-4 h-16 flex items-center justify-between">
  <div class="flex  items-center space-x-3">
    <VideoIcon size={32} />
    <h1 class="font-medium text-2xl">Svelte Meet</h1>
  </div>
  <div>
    <GithubIcon />
  </div>
</nav>
