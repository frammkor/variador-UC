<script>
  import { getTranslations } from '$lib/i18n/index.js';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import TaxiDancerSection from '$lib/components/TaxiDancerSection.svelte';
  import WhySection from '$lib/components/WhySection.svelte';

  let { language } = $props();
  const copy = $derived(getTranslations(language));
</script>

<svelte:head>
  <title>{copy.metaTitle}</title>
  <meta name="description" content={copy.metaDescription} />
</svelte:head>

<SiteHeader
  {language}
  copy={copy.navigation}
  homeHref="./"
  languageLinks={{ en: '../en/', es: '../es/' }}
/>
<main>
  <HeroSection copy={copy.hero} />
  <TaxiDancerSection copy={copy.taxiDancer} />
  <WhySection copy={copy.why} />
  <AboutSection copy={copy.about} />
</main>
<SiteFooter copy={copy.footer} />
