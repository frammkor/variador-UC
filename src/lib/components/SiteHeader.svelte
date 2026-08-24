<script>
  let { language, copy, homeHref, languageLinks } = $props();
</script>

<header>
  <div class="container header-content">
    <div class="brand-group">
      <a class="brand" href={homeHref} aria-label="Dandy Dancers">
        <span class="logo" aria-hidden="true"></span>
      </a>
      <span class="desktop-tagline">{copy.tagline}</span>
    </div>

    <div class="header-actions">
      <nav class="language-nav" aria-label={copy.languageSelector}>
        <a
          href={languageLinks.en}
          lang="en"
          aria-current={language === 'en' ? 'page' : undefined}
          data-sveltekit-reload>EN</a
        >
        <span aria-hidden="true">/</span>
        <a
          href={languageLinks.es}
          lang="es"
          aria-current={language === 'es' ? 'page' : undefined}
          data-sveltekit-reload>ES</a
        >
      </nav>
    </div>
  </div>
  <div class="mobile-tagline">{copy.tagline}</div>
</header>

<style>
  header {
    color: var(--white);
    background: var(--header-color);
  }

  .header-content {
    display: flex;
    height: var(--header-main-height);
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-block: 8px;
  }

  .brand {
    display: block;
  }

  .brand-group {
    display: flex;
    min-width: 0;
    align-items: center;
  }

  .desktop-tagline {
    display: none;
  }

  .mobile-tagline {
    display: grid;
    height: var(--header-tagline-height);
    padding-inline: 1rem;
    place-items: center;
    border-top: 1px solid color-mix(in srgb, var(--white) 16%, var(--transparent));
    color: var(--header-text-color);
    font-size: 0.75rem;
    line-height: 1.35;
    text-align: center;
  }

  .logo { display: block; width: 90px; aspect-ratio: 500 / 299; background: var(--asset-logo-on-dark) center / contain no-repeat; }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .language-nav {
    display: flex;
    gap: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  .language-nav a {
    text-underline-offset: 0.25em;
  }

  .language-nav a:not([aria-current='page']) {
    color: var(--header-muted-color);
    text-decoration: none;
  }

  @media (min-width: 48rem) {
    .header-content {
      padding-block: 12px;
    }

    .logo { width: 120px; }
  }

  @media (min-width: 64rem) {
    .brand-group {
      gap: 1.25rem;
    }

    .brand {
      padding-right: 1.25rem;
      border-right: 1px solid color-mix(in srgb, var(--white) 28%, var(--transparent));
    }

    .desktop-tagline {
      display: inline;
      max-width: 25rem;
      color: var(--header-text-color);
      font-size: 0.875rem;
      line-height: 1.4;
    }

    .mobile-tagline {
      display: none;
    }
  }

</style>
