<script lang="ts">
  import ArrowRight from "$lib/icons/ArrowRight.svelte";
  let roomId: string;
</script>

<div class:join={roomId} class="w-full sm:col-span-3">
  <input
    type="text"
    aria-label="Enter code and join meet"
    placeholder="Enter code and join meet"
    name="roomId"
    class="input input-bordered join-item focus:outline-0 w-full lg:max-w-xs"
    bind:value={roomId}
  />
  {#if roomId}
    <a class="btn btn-info btn-square join-item" href={roomId}>
      <ArrowRight />
    </a>
  {/if}
</div>
