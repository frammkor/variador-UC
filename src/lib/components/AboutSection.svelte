<script>
  let { copy } = $props();
</script>

<section class="section" id="about">
  <div class="container about-layout">
    <div>
      <p class="eyebrow">{copy.eyebrow}</p>
      <h2 class="section-title">{copy.title}</h2>
    </div>
    <div class="copy">
      <p>{copy.description}</p>
      <p class="note">{copy.note}</p>
    </div>
  </div>
</section>

<style>
  .about-layout {
    display: grid;
    gap: 1rem;
  }

  .copy {
    max-width: 40rem;
    color: var(--color-body);
    font-size: 1.0625rem;
    line-height: 1.65;
  }

  .note {
    color: var(--color-primary);
    font-size: 0.875rem;
  }

  @media (min-width: 48rem) {
    .about-layout {
      grid-template-columns: 0.8fr 1.2fr;
      gap: 4rem;
    }
  }
</style>
