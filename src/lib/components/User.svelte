<script lang="ts">
  import PhoneIcon from "$lib/icons/PhoneIcon.svelte";
  import UserIcon from "$lib/icons/UserIcon.svelte";
  import { createEventDispatcher } from "svelte";

  export let user: string;

  const dispatch = createEventDispatcher();

  function callUser() {
    dispatch("callUser", {
      user,
    });
  }
</script>

<div class="flex items-center space-x-3 bg-gray-800 rounded-md px-4 py-2">
  <span class="">
    <UserIcon />
  </span>
  <h6 class="font-semibold text-sm">{user}</h6>
  <div>
    <button
      on:click={callUser}
      class="bg-blue-900 rounded-full  w-9 h-9 grid place-items-center"
      title="Call"
    >
      <PhoneIcon />
    </button>
  </div>
</div>
