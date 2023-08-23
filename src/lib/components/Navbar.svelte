<script>
  import ThemesDropdown from "./themes-dropdown.svelte";
</script>

<nav class="navbar bg-base-200">
  <div class="flex justify-between flex-1 max-w-7xl mx-auto">
    <h1 class="text-2xl font-medium">Svelte Meet</h1>
    <div class="flex items-center">
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
  </div>
</nav>
