<script>
  import '../app.css';
  import ChatWidget from '$lib/components/ChatWidget.svelte';

  let { children } = $props();
</script>

{@render children()}
<ChatWidget />
