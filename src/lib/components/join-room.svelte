<script lang="ts">
  import ArrowRight from "$lib/icons/ArrowRight.svelte";
  let roomId: string;
</script>

<div class:join={roomId}>
  <input
    type="text"
    aria-label="Enter a code"
    placeholder="Enter a code"
    name="roomId"
    class="input input-bordered join-item focus:outline-0"
    bind:value={roomId}
  />
  {#if roomId}
    <a class="btn btn-info btn-square join-item" href={roomId}>
      <ArrowRight />
    </a>
  {/if}
</div>
