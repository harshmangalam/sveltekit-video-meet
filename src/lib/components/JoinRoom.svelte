<script lang="ts">
  import { goto } from "$app/navigation";
  import ArrowRight from "$lib/icons/ArrowRight.svelte";
  import KeyboardIcon from "$lib/icons/KeyboardIcon.svelte";

  let roomId: string;

  function handleJoin() {
    goto(roomId);
  }
</script>

<div class="flex items-center space-x-2 sm:w-auto w-full">
  <div class="group relative w-full">
    <div
      class="absolute left-3 top-1/2  -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
    >
      <KeyboardIcon />
    </div>
    <input
      class="focus:ring-2 dark:focus:ring-blue-500 focus:outline-none appearance-none w-full leading-6 text-grey-900 placeholder-grey-400 rounded-md py-2 pl-12 ring-2 dark:ring-gray-500 shadow-sm dark:bg-gray-800 dark:border-gray-800"
      type="text"
      aria-label="Enter a code"
      placeholder="Enter a code"
      name="roomId"
      bind:value={roomId}
    />
  </div>

  <button title="Join room" on:click={handleJoin} class="p-2 dark:bg-gray-800 rounded-md">
    <ArrowRight />
  </button>
</div>
