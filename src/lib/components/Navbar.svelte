<script>
  import ThemesDropdown from "./themes-dropdown.svelte";
</script>

<nav class="navbar bg-base-100">
  <div class="flex-1">
    <h1 class="text-2xl font-medium">Svelte Meet</h1>
  </div>
  <div class="flex items-center flex-none">
    <ThemesDropdown />
    <a
      title="Github repo"
      href="https://github.com/harshmangalam/sveltekit-video-meet"
      target="_blank"
      class="btn btn-square btn-ghost"
    >
      <iconify-icon width={24} height={24} icon="fa:github" /></a
    >
  </div>
</nav>
