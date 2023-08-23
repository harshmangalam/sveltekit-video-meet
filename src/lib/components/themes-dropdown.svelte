<script lang="ts">
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  function handleChangeTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<details class="dropdown dropdown-left">
  <summary class="m-1 btn btn-square btn-ghost">
    <iconify-icon width={24} height={24} icon="fluent:dark-theme-24-regular" />
  </summary>
  <ul
    class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
  >
    {#each themes as theme}
      <li>
        <button on:click={() => handleChangeTheme(theme)}>
          {theme}
        </button>
      </li>
    {/each}
  </ul>
</details>
