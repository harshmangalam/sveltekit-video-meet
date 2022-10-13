<script>
  import VideoIcon from "$lib/icons/VideoIcon.svelte";
</script>

<a
  href={crypto.randomUUID()}
  type="submit"
  title="Create room"
  class="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded dark:bg-blue-800 dark:text-blue-100 ring-2 ring-blue-800"
>
  <VideoIcon />
  <span>New meeting</span>
</a>
