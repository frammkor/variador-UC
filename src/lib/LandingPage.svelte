<script>
  import { getTranslations } from '$lib/i18n/index.js';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import TaxiDancerPreviewSection from '$lib/components/TaxiDancerPreviewSection.svelte';
  import WhySection from '$lib/components/WhySection.svelte';

  let { language } = $props();
  const copy = $derived(getTranslations(language));
</script>

<SeoHead language={language} title={copy.metaTitle} description={copy.metaDescription} />

<SiteHeader
  {language}
  copy={copy.navigation}
  homeHref="./"
  languageLinks={{ en: '../en/', es: '../es/' }}
/>
<main>
  <HeroSection
    copy={copy.hero}
    modalCopy={copy.taxiDancer}
    registrationHref="./taxi-dancer-registration/"
  />
  <WhySection copy={copy.why} />
  <TaxiDancerPreviewSection
    copy={copy.previewSection}
    previewCopy={copy.hero.preview}
  />
  <AboutSection copy={copy.about} />
</main>
<SiteFooter copy={copy.footer} />
