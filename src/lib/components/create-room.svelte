<script>
  import VideoIcon from "$lib/icons/VideoIcon.svelte";
  const id = crypto.randomUUID();
</script>

<a href={id} title="Create room" class="btn btn-primary">
  <VideoIcon />
  <span>New meeting</span>
</a>
