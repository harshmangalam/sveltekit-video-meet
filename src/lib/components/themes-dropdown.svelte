<script lang="ts">
  const themes = [
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "halloween",
    "garden",
    "forest",
    "lofi",
    "fantasy",
    "luxury",
    "dracula",
    "business",
    "acid",
    "lemonade",
  ];

  let currentTheme = "corporate";
  function handleChangeTheme(theme: string) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<details class="dropdown dropdown-end">
  <summary class="m-1 btn btn-square btn-ghost">
    <iconify-icon width={24} height={24} icon="fluent:dark-theme-24-regular" />
  </summary>
  <ul
    class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
  >
    {#each themes as theme}
      <li>
        <button
          class:active={currentTheme === theme}
          on:click={() => handleChangeTheme(theme)}
        >
          {theme}
        </button>
      </li>
    {/each}
  </ul>
</details>
