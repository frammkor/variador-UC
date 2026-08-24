<script>
  let { language, title, description } = $props();

  const siteUrl = 'https://dandydancers.com';
  const logoUrl = `${siteUrl}/images/DD-logo.png`;
  const socialImageUrl = `${siteUrl}/images/DD-social.png`;
  const pageUrl = $derived(`${siteUrl}/${language}/`);
  const isEnglish = $derived(language === 'en');
  const locale = $derived(isEnglish ? 'en_US' : 'es_AR');
  const alternateLocale = $derived(isEnglish ? 'es_AR' : 'en_US');

  const structuredData = $derived({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Dandy Dancers',
        url: `${siteUrl}/`,
        logo: {
          '@type': 'ImageObject',
          url: logoUrl
        },
        email: 'mailto:contact.dandydancers@gmail.com',
        telephone: '+5491155284015',
        foundingDate: '2026',
        founder: {
          '@type': 'Person',
          '@id': `${siteUrl}/#founder`,
          name: 'Franco Cespi',
          url: 'https://francocespi.com/',
          image: `${siteUrl}/images/franco-cespi.webp`,
          sameAs: ['https://www.instagram.com/franco.cespi/']
        },
        sameAs: [
          'https://www.instagram.com/dandydancers/',
          'https://wa.me/5491155284015'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'Dandy Dancers',
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: ['en', 'es']
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#service` },
        inLanguage: language
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        name: isEnglish
          ? 'Professional tango dance partner booking in Buenos Aires'
          : 'Reserva de bailarines profesionales de tango en Buenos Aires',
        description,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: {
          '@type': 'City',
          name: 'Buenos Aires',
          containedInPlace: {
            '@type': 'Country',
            name: 'Argentina'
          }
        },
        audience: {
          '@type': 'Audience',
          audienceType: isEnglish
            ? 'Adult tango dancers and international travelers visiting Buenos Aires'
            : 'Personas adultas que bailan tango y viajeros internacionales que visitan Buenos Aires'
        },
        availableLanguage: ['Spanish', 'English', 'German', 'French', 'Turkish', 'Portuguese', 'Greek', 'Polish'],
        serviceType: isEnglish
          ? 'Professional tango dance partner for milongas, lessons, and practice'
          : 'Bailarín profesional de tango para milongas, clases y prácticas'
      }
    ]
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={pageUrl} />
  <link rel="alternate" hreflang="en" href={`${siteUrl}/en/`} />
  <link rel="alternate" hreflang="es" href={`${siteUrl}/es/`} />
  <link rel="alternate" hreflang="x-default" href={`${siteUrl}/en/`} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Dandy Dancers" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:locale" content={locale} />
  <meta property="og:locale:alternate" content={alternateLocale} />
  <meta property="og:image" content={socialImageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:alt" content="Dandy Dancers" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={socialImageUrl} />

  {@html `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}<\/script>`}
</svelte:head>
