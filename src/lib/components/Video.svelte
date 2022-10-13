<script lang="ts">
  import video from "$lib/directive/video";

  export let stream: MediaStream;
  export let user: string;
  export let isCurrentUser: boolean = false;
</script>

{#if stream}
  <div class="relative bg-white dark:bg-gray-800 dark:border-gray-600  shadow-md rounded-md border-2">
    <video
      use:video={stream}
      class="w-full h-full rounded-md"
      autoPlay
      playsinline
      controls={false}
    >
      <track kind="captions" />
    </video>
    {#if user}
      <div
        class="absolute right-0 text-sm left-0 bottom-0 h-8 bg-gray-900/60 backdrop-blur-md flex items-center text-white px-2 rounded-b-md"
      >
        {#if isCurrentUser}
          You
        {:else}
          Remote
        {/if}

        ({user})
      </div>
    {/if}
  </div>
{/if}
