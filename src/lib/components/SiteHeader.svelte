<script>
  import { asset } from '$app/paths';

  let { language, copy, homeHref, languageLinks } = $props();
</script>

<header>
  <div class="container header-content">
    <a class="brand" href={homeHref} aria-label="Dandy Dancers">
      <img src={asset('/images/DD-logo.png')} alt="Dandy Dancers" />
    </a>

    <nav aria-label={copy.languageSelector}>
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
</header>

<style>
  header {
    color: #ffffff;
    background: #000000;
  }

  .header-content {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-block: 8px;
  }

  .brand {
    display: block;
  }

  img {
    width: auto;
    max-height: 54px;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
  }

  nav a {
    text-underline-offset: 0.25em;
  }

  nav a:not([aria-current='page']) {
    color: #bdb6c0;
    text-decoration: none;
  }

</style>
