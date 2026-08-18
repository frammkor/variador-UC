<script>
  import { getTranslations } from '$lib/i18n/index.js';
  import { taxiDancerFormUrl } from '$lib/config.js';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

  let { language } = $props();
  const copy = $derived(getTranslations(language));
</script>

<svelte:head>
  <title>{copy.registration.metaTitle}</title>
  <meta name="description" content={copy.registration.metaDescription} />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="googlebot" content="noindex, nofollow" />
</svelte:head>

<SiteHeader
  {language}
  copy={copy.navigation}
  homeHref="../"
  languageLinks={{
    en: '../../en/taxi-dancer-registration/',
    es: '../../es/taxi-dancer-registration/'
  }}
/>

<main>
  <article class="container">
    <p class="eyebrow">{copy.registration.eyebrow}</p>
    <h1>{copy.registration.title}</h1>

    <div class="content">
      {#each copy.registration.paragraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>

    {#if taxiDancerFormUrl}
      <a class="cta" href={taxiDancerFormUrl} target="_blank" rel="noreferrer">
        {copy.registration.cta}
      </a>
    {:else}
      <button class="cta" type="button" disabled title={copy.registration.formPending}>
        {copy.registration.cta}
      </button>
      <p class="form-pending">{copy.registration.formPending}</p>
    {/if}
  </article>
</main>

<SiteFooter copy={copy.footer} />

<style>
  main {
    min-height: calc(100vh - 12rem);
    background: linear-gradient(180deg, var(--color-primary-200) 0%, #ffffff 24rem);
  }

  article {
    padding-block: var(--section-space);
  }

  h1 {
    max-width: 14ch;
    margin-bottom: 2rem;
    font-size: clamp(2.75rem, 10vw, 5.5rem);
    line-height: 0.98;
    letter-spacing: -0.045em;
  }

  .content {
    max-width: 48rem;
    margin-bottom: 2.5rem;
    color: var(--color-body);
    font-size: 1.0625rem;
    line-height: 1.7;
  }

  .content p {
    margin-bottom: 1.25rem;
  }

  .cta {
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

  button.cta:disabled {
    border-color: var(--color-border);
    color: var(--color-muted);
    background: var(--color-surface);
    cursor: not-allowed;
  }

  .form-pending {
    margin-top: 0.75rem;
    color: var(--color-muted);
    font-size: 0.75rem;
  }
</style>
