<script>
  import CreateRoom from "$lib/components/CreateRoom.svelte";
  import JoinRoom from "$lib/components/JoinRoom.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import HeroSection from "$lib/components/hero-section.svelte";
</script>

<svelte:head>
  <title>Svelte Meet</title>
</svelte:head>
<div class="min-h-screen bg-base-100">
  <Navbar />
  <main>
    <HeroSection />
  </main>
</div>
