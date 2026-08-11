<script>
  import { getTranslations } from '$lib/i18n/index.js';

  let { language } = $props();
  const copy = $derived(getTranslations(language));
</script>

<svelte:head>
  <title>Dandy Dancers</title>
  <meta
    name="description"
    content={copy.metaDescription}
  />
</svelte:head>

<div class="page">
  <header>
    <div class="header-content">
      <img src="../images/DD-logo.png" alt="Dandy Dancers" />

      <nav aria-label={copy.languageSelector}>
        <a
          href="../en/"
          lang="en"
          aria-current={language === 'en' ? 'page' : undefined}
          data-sveltekit-reload>EN</a
        >
        <span aria-hidden="true">/</span>
        <a
          href="../es/"
          lang="es"
          aria-current={language === 'es' ? 'page' : undefined}
          data-sveltekit-reload>ES</a
        >
      </nav>
    </div>
  </header>

  <main>
    <h1>Dandy Dancers</h1>
    <p>{copy.subtitle}</p>
  </main>
</div>

<style>
  .page {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr;
  }

  header {
    color: #ffffff;
    background: #000000;
  }

  .header-content {
    display: flex;
    width: min(100%, 75rem);
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem 1rem;
  }

  header img {
    width: 9rem;
    height: auto;
  }

  main {
    display: grid;
    place-content: center;
    padding: 1.5rem;
    text-align: center;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  nav a {
    text-underline-offset: 0.2em;
  }

  nav a:not([aria-current='page']) {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.5rem, 12vw, 6rem);
    line-height: 1;
  }

  p {
    margin: 1rem 0 0;
    font-size: clamp(1rem, 3vw, 1.25rem);
  }

  @media (min-width: 48rem) {
    .header-content {
      padding: 1rem 2rem;
    }

    header img {
      width: 11rem;
    }
  }
</style>
