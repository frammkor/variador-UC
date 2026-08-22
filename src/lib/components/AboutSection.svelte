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
    </div>
  </div>
</section>

<style>
  .about-layout {
    display: grid;
    justify-items: center;
    gap: 1rem;
    text-align: center;
  }

  .about-layout :global(.section-title) {
    margin-inline: auto;
  }

  .copy {
    max-width: 40rem;
    color: var(--color-body);
    font-size: 1.0625rem;
    line-height: 1.2rem;
  }

  .copy p {
    margin-bottom: 0;
  }
</style>
