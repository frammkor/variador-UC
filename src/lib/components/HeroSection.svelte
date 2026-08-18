<script>
  import PhonePreview from './PhonePreview.svelte';

  let { copy } = $props();
</script>

<section class="hero">
  <div class="container hero-layout">
    <div class="hero-copy">
      <p class="status">{copy.status}</p>
      <p class="eyebrow">Dandy Dancers</p>
      <h1>{copy.title}</h1>
      <p class="lead">{copy.subtitle}</p>
      <p class="supporting">{copy.supporting}</p>
    </div>

    <PhonePreview copy={copy.preview} />
  </div>
</section>

<style>
  .hero {
    padding-block: clamp(3rem, 8vw, 6rem);
    overflow: hidden;
    background: linear-gradient(180deg, var(--color-primary-200) 0%, #ffffff 80%);
  }

  .hero-layout {
    display: grid;
    gap: 3rem;
    align-items: center;
  }

  .hero-copy {
    max-width: 42rem;
  }

  .status {
    display: inline-block;
    margin-bottom: 2rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid color-mix(in srgb, var(--color-primary) 35%, transparent);
    border-radius: 999px;
    color: var(--color-primary-900);
    background: color-mix(in srgb, #ffffff 55%, transparent);
    font-size: 0.75rem;
    font-weight: 700;
  }

  h1 {
    max-width: 12ch;
    margin-bottom: 1.25rem;
    font-size: clamp(3rem, 13vw, 6.5rem);
    line-height: 0.95;
    letter-spacing: -0.055em;
  }

  .lead {
    max-width: 30rem;
    margin-bottom: 1rem;
    font-size: clamp(1.25rem, 4vw, 1.75rem);
    line-height: 1.3;
  }

  .supporting {
    max-width: 38rem;
    margin-bottom: 0;
    color: var(--color-body);
    line-height: 1.65;
  }

  @media (min-width: 55rem) {
    .hero-layout {
      grid-template-columns: minmax(0, 1.25fr) minmax(17rem, 0.75fr);
      gap: 5rem;
    }
  }
</style>
