<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let caller: string;
  const dispatch = createEventDispatcher();
  const receiveCall = () => {
    dispatch("receivecall");
  };
  const rejectCall = () => {
    dispatch("rejectcall");
  };
</script>

<div class="toast toast-end z-10">
  <div class="alert shadow-lg">
    <iconify-icon width={32} height={32} icon="simple-line-icons:call-in" />
    <div>
      <h3 class="font-bold">Incommin Call</h3>
      <div class="text-sm max-w-xs w-full truncate">
        {caller} is calling you...
      </div>
    </div>
    <div class="flex items-center gap-2">
      <button
        on:click={rejectCall}
        class="btn btn-error btn-circle"
        title="Decline"
      >
        <iconify-icon width={24} height={24} icon="subway:call-3" />
      </button>
      <button
        class="btn btn-primary btn-circle"
        on:click={receiveCall}
        title="Accept"
      >
        <iconify-icon width={24} height={24} icon="subway:call" />
      </button>
    </div>
  </div>
</div>
