<script lang="ts">
  import { page } from "$app/stores";
  let open = true;
  let link = $page.url.href;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    open = false;
  };
</script>

{#if open}
  <div class="toast toast-top toast-start z-10">
    <div class="alert shadow-lg">
      <iconify-icon width={32} height={32} icon="solar:copy-linear" />
      <div>
        <h3 class="font-bold">Copy & send joining link</h3>
        <div class="text-sm max-w-xs w-full truncate">{link}</div>
      </div>
      <div class="flex items-center gap-2">
        <button
          on:click={copyToClipboard}
          class="btn rounded-full btn-sm btn-neutral"
        >
          Copy
        </button>
        <button
          on:click={() => (open = false)}
          class="btn rounded-full btn-sm btn-error"
        >
          Close
        </button>
      </div>
    </div>
  </div>
{/if}
