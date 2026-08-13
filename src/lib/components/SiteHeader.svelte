<script>
  let { language, label } = $props();
</script>

<header>
  <div class="container header-content">
    <a class="brand" href="./" aria-label="Dandy Dancers">
      <img src="../images/DD-logo.png" alt="Dandy Dancers" />
    </a>

    <nav aria-label={label}>
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

<style>
  header {
    color: #ffffff;
    background: #000000;
  }

  .header-content {
    display: flex;
    min-height: 5rem;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .brand {
    display: block;
  }

  img {
    width: 8.5rem;
    height: auto;
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

  @media (min-width: 48rem) {
    .header-content {
      min-height: 6rem;
    }

    img {
      width: 10.5rem;
    }
  }
</style>

