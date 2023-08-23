<script lang="ts">
  import video from "$lib/directive/video";

  export let stream: MediaStream;
  export let user: string;
  export let isCurrentUser: boolean = false;
</script>

{#if stream}
  <div class="card rounded-md">
    <video
      use:video={stream}
      class="w-full h-full rounded-md"
      autoPlay
      playsinline
      controls={false}
    >
      <track kind="captions" />
    </video>
    <div class="card-body p-0">
      {#if user}
        <div
          class="absolute right-0 text-sm left-0 bottom-0 h-8 backdrop-blur-sm flex items-center text-white px-2 rounded-b-md"
        >
          {#if isCurrentUser}
            You
          {:else}
            Remote
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}
