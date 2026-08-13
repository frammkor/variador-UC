<script>
  let { copy } = $props();
</script>

<section class="section" id="taxi-dancers">
  <div class="container content">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title">{copy.title}</h2>
    <p class="section-intro">{copy.description}</p>
    <button type="button" disabled>{copy.cta}</button>
  </div>
</section>

<style>
  .content {
    display: grid;
    justify-items: start;
  }

  button {
    padding: 0.8rem 1.1rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    color: var(--color-muted);
    background: var(--color-surface);
    cursor: not-allowed;
  }
</style>

