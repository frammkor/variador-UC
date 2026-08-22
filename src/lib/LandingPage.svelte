<script>
  import { getTranslations } from '$lib/i18n/index.js';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import SeoHead from '$lib/components/SeoHead.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import AppPreviewSection from '$lib/components/AppPreviewSection.svelte';
  import PhonePreview from '$lib/components/PhonePreview.svelte';
  import WhySection from '$lib/components/WhySection.svelte';
  import DancersCarouselSection from '$lib/components/DancersCarouselSection.svelte';
  import { getWhatsAppHref, taxiDancerInquiryMessage } from '$lib/config.js';

  let { language } = $props();
  const copy = $derived(getTranslations(language));
  const whatsappHref = getWhatsAppHref(taxiDancerInquiryMessage);
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
  <WhySection copy={copy.why} ctaHref={whatsappHref} ctaExternal />
  <AppPreviewSection
    copy={copy.previewSection}
    previewCopy={copy.hero.preview}
    PreviewComponent={PhonePreview}
  />
  <DancersCarouselSection
    copy={copy.dancers}
    registrationHref="./taxi-dancer-registration/"
  />
  <AboutSection copy={copy.about} />
</main>
<SiteFooter copy={copy.footer} />
