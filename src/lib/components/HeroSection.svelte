<script>
  import { whatsappUrl } from '$lib/config.js';
  import PhonePreview from './PhonePreview.svelte';

  let { copy, registrationHref } = $props();
  const whatsappHref = $derived(`${whatsappUrl}?text=${encodeURIComponent(copy.whatsappMessage)}`);
</script>

<section class="hero">
  <div class="container hero-layout">
    <div class="hero-copy">
      <h1>{copy.title}</h1>
      <p class="supporting">{copy.supporting}</p>
      <div class="actions">
        <a class="primary-cta" href={whatsappHref} target="_blank" rel="noreferrer">{copy.cta}</a>
        <a class="registration-link" href={registrationHref}>{copy.registrationCta}</a>
      </div>
    </div>

    <PhonePreview copy={copy.preview} />
  </div>
</section>

<style>
  .hero {
    padding-block: clamp(3rem, 8vw, 6rem);
    overflow-x: clip;
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

  h1 {
    max-width: 12ch;
    margin-bottom: 1.25rem;
    font-size: clamp(3rem, 13vw, 6.5rem);
    line-height: 0.95;
    letter-spacing: -0.055em;
  }

  .supporting {
    max-width: 38rem;
    margin-bottom: 1.75rem;
    color: var(--color-body);
    line-height: 1.65;
  }

  .actions {
    display: grid;
    justify-items: start;
    gap: 0.75rem;
  }

  .primary-cta {
    display: inline-flex;
    min-height: 3rem;
    padding: 0.8rem 1.25rem;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-primary);
    border-radius: 999px;
    color: #ffffff;
    background: var(--color-primary);
    font-weight: 700;
    text-decoration: none;
  }

  .registration-link {
    color: var(--color-primary-900);
    font-size: 0.875rem;
    font-weight: 600;
    text-underline-offset: 0.2em;
  }

  @media (min-width: 55rem) {
    .hero-layout {
      grid-template-columns: minmax(0, 1.25fr) minmax(17rem, 0.75fr);
      gap: 5rem;
    }
  }
</style>
