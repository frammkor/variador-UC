<script>
  import { getTranslations } from '$lib/i18n/index.js';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';

  /** @type {{ language: 'en' | 'es', document: 'terms' | 'privacy' | 'cookies' }} */
  let { language, document } = $props();
  const copy = $derived(getTranslations(language));
  const pageCopy = $derived(copy.legal[document]);
  const routeNames = {
    terms: 'terms-of-service',
    privacy: 'privacy-policy',
    cookies: 'cookies-policy'
  };
  const routeName = $derived(routeNames[document]);
  const siteUrl = 'https://dandydancers.com';
  const pageUrl = $derived(`${siteUrl}/${language}/${routeName}/`);
  const footerLinks = $derived([
    { href: `/${language}/#why`, label: copy.why.eyebrow },
    { href: `/${language}/#dancers`, label: copy.dancers.eyebrow },
    { href: `/${language}/#testimonials`, label: copy.testimonials.eyebrow },
    { href: `/${language}/#about`, label: copy.about.eyebrow },
    { href: `/${language}/taxi-dancer-registration/`, label: copy.hero.registrationCta }
  ]);
  const legalLinks = $derived([
    { href: '../terms-of-service/', label: copy.legal.terms.title },
    { href: '../privacy-policy/', label: copy.legal.privacy.title },
    { href: '../cookies-policy/', label: copy.legal.cookies.title }
  ]);
</script>

<svelte:head>
  <title>{pageCopy.title} | Dandy Dancers</title>
  <meta name="description" content={`${pageCopy.title} — Dandy Dancers. ${copy.legal.comingSoon}`} />
  <meta name="robots" content="noindex, follow" />
  <meta name="googlebot" content="noindex, follow" />
  <link rel="canonical" href={pageUrl} />
  <link rel="alternate" hreflang="en" href={`${siteUrl}/en/${routeName}/`} />
  <link rel="alternate" hreflang="es" href={`${siteUrl}/es/${routeName}/`} />
  <link rel="alternate" hreflang="x-default" href={`${siteUrl}/en/${routeName}/`} />
</svelte:head>

<SiteHeader
  {language}
  copy={copy.navigation}
  homeHref="../"
  languageLinks={{ en: `../../en/${routeName}/`, es: `../../es/${routeName}/` }}
/>

<main>
  <article class="container">
    <p class="eyebrow">{copy.legal.eyebrow}</p>
    <h1>{pageCopy.title}</h1>
    <p>{copy.legal.comingSoon}</p>
  </article>
</main>

<SiteFooter copy={copy.footer} links={footerLinks} legalLinks={legalLinks} homeHref="../" />

<style>
  main { display: grid; min-height: 55svh; align-items: center; }
  article { padding-block: var(--section-space); text-align: center; }
  h1 { margin-bottom: 1rem; font-size: clamp(2.5rem, 8vw, 5rem); line-height: 1; }
  article > p:last-child { color: var(--muted-color); font-size: 1.0625rem; }
</style>
