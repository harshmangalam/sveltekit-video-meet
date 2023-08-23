<script>
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import VideoIcon from "$lib/icons/VideoIcon.svelte";
  import ThemesDropdown from "./themes-dropdown.svelte";
</script>

<nav class="navbar bg-base-100">
  <div class="flex-1 flex items-center gap-2">
    <VideoIcon size={32} />
    <h1 class="text-xl font-bold">Svelte Meet</h1>
  </div>
  <div class="flex gap-2 items-center flex-none">
    <ThemesDropdown />
    <a
      title="Github repo"
      href="https://github.com/harshmangalam/sveltekit-video-meet"
      target="_blank"
      class="btn btn-square btn-ghost"><GithubIcon /></a
    >
  </div>
</nav>
