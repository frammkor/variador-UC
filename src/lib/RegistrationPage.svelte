<script>
  import { getTranslations } from '$lib/i18n/index.js';
  import { taxiDancerFormUrl } from '$lib/config.js';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import AppPreviewSection from '$lib/components/AppPreviewSection.svelte';
  import TaxiRegistrationPreview from '$lib/components/TaxiRegistrationPreview.svelte';
  import WhySection from '$lib/components/WhySection.svelte';
  import TaxiDancerComparison from '$lib/components/TaxiDancerComparison.svelte';

  let { language } = $props();
  const copy = $derived(getTranslations(language));
  const footerLinks = $derived([
    { href: '../#why', label: copy.why.eyebrow },
    { href: '../#dancers', label: copy.dancers.eyebrow },
    { href: '../#testimonials', label: copy.testimonials.eyebrow },
    { href: '../#about', label: copy.about.eyebrow }
  ]);
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

    <a class="cta" href={taxiDancerFormUrl} target="_blank" rel="noreferrer">
      {copy.registration.cta}
    </a>
  </article>
</main>

<WhySection copy={copy.registration.why} ctaHref={taxiDancerFormUrl} ctaExternal />

<AppPreviewSection
  copy={copy.registration.previewSection}
  previewCopy={copy.registration.preview}
  PreviewComponent={TaxiRegistrationPreview}
/>

<TaxiDancerComparison
  copy={copy.registration.comparison}
  ctaHref={taxiDancerFormUrl}
  ctaLabel={copy.registration.cta}
/>

<SiteFooter copy={copy.footer} links={footerLinks} homeHref="../" />

<style>
  main {
    display: grid;
    min-height: calc(100svh - var(--header-main-height) - var(--header-tagline-height));
    background:
      linear-gradient(
        90deg,
        color-mix(in srgb, var(--primary-900) 66%, var(--transparent)) 0%,
        color-mix(in srgb, var(--primary-900) 46%, var(--transparent)) 52%,
        color-mix(in srgb, var(--primary-700) 18%, var(--transparent)) 100%
      ),
      url('/images/taxis-hero.webp') center / cover no-repeat;
  }

  article {
    align-self: center;
    padding-block: var(--section-space);
  }

  h1 {
    max-width: 14ch;
    margin-bottom: 2rem;
    color: var(--white);
    font-size: clamp(2.75rem, 10vw, 5.5rem);
    line-height: 0.98;
    letter-spacing: -0.045em;
  }

  .content {
    max-width: 48rem;
    margin-bottom: 2.5rem;
    color: color-mix(in srgb, var(--white) 92%, var(--transparent));
    font-size: 1.0625rem;
    line-height: 1.2rem;
  }

  .content p {
    margin-bottom: 1.25rem;
  }

  article :global(.eyebrow) {
    color: var(--primary-200);
  }

  .cta {
    display: inline-flex;
    min-height: 3rem;
    padding: 0.8rem 1.25rem;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary-600);
    border-radius: 999px;
    color: var(--white);
    background: var(--primary-600);
    font-weight: 700;
    text-decoration: none;
  }

</style>
