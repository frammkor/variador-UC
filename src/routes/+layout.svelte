<script>
  import '../app.css';
  import FloatingWhatsApp from '$lib/components/FloatingWhatsApp.svelte';

  let { children } = $props();
</script>

{@render children()}
<FloatingWhatsApp />
