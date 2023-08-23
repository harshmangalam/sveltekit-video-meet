<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let dialogRef: HTMLDialogElement | undefined;
  export let users: string[] = [];
  export let room: string;
  function callUser(user: string) {
    dispatch("calluser", {
      user,
    });
  }
</script>

<button class="btn btn-circle relative" on:click={() => dialogRef?.showModal()}>
  <iconify-icon width={24} height={24} icon="ph:users-bold" />
  <div class="badge badge-error rounded-full absolute -top-2 -right-2">
    {users.length}
  </div>
</button>
<dialog bind:this={dialogRef} class="modal">
  <form method="dialog" class="modal-box relative">
    <div class="absolute right-4 top-4">
      <button class="btn btn-circle btn-ghost">
        <iconify-icon width={24} height={24} icon="material-symbols:close" />
      </button>
    </div>
    <h3 class="font-bold text-lg mb-4">Remote Users</h3>
    <ul class="flex flex-col divide-y">
      {#if users.length === 0}
        <div
          class="text-center flex flex-col gap-2 min-h-[200px] justify-center"
        >
          <h6 class="text-xl">No Users</h6>
          <p class="opacity-60">No one has connected yet in room: {room}</p>
        </div>
      {/if}
      {#each users as user}
        <li class="py-2 px-4 hover:bg-base-200 rounded-md">
          <div class="card w-full">
            <div class="card-body p-0">
              <div class="flex items-center gap-2 justify-between">
                <div class="flex items-center gap-2">
                  <iconify-icon
                    width={24}
                    height={24}
                    icon="solar:user-broken"
                  />
                  <h6 class="font-semibold text-sm">{user}</h6>
                </div>
                <div>
                  <button
                    on:click={() => callUser(user)}
                    class="btn btn-circle btn-primary btn-sm"
                    title="Call"
                  >
                    <iconify-icon width={18} height={18} icon="subway:call-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </form>
</dialog>
