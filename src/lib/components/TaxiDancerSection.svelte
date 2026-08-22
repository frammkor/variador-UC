<script>
  let { copy } = $props();
</script>

<section class="section service" id="taxi-dancers">
  <div class="container">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title">{copy.title}</h2>
    <p class="section-intro">{copy.description}</p>
  </div>
</section>

<style>
  .service {
    color: #ffffff;
    background: var(--color-primary-700);
  }

  .service :global(.eyebrow) {
    color: var(--color-primary-200);
  }

  .service :global(.section-title),
  .service :global(.section-intro) {
    color: #ffffff;
  }

</style>
