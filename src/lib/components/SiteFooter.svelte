<script>
  import { getWhatsAppHref } from '$lib/config.js';

  let { copy, links = [], homeHref = './' } = $props();
  const whatsappHref = $derived(getWhatsAppHref(copy.whatsappMessage));
</script>

<footer>
  <div class="container footer-grid">
    <div class="brand-column">
      <a class="brand" href={homeHref} aria-label="Dandy Dancers">
        <span class="logo" aria-hidden="true"></span>
      </a>
      <address>
        <a href={whatsappHref} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.9L2 22l5.25-1.55A9.96 9.96 0 1 0 12.04 2Zm5.81 13.93c-.25.7-1.47 1.34-2.03 1.42-.52.08-1.18.11-1.9-.12-.44-.14-1-.32-1.72-.63-3.03-1.31-5-4.35-5.15-4.55-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.38.82-.38h.59c.19.01.44-.07.69.53.25.6.85 2.08.93 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.18.3.77 1.28 1.67 1.81 1.16.7 2.13.92 2.43 1.02.3.1.47.08.65-.12.17-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.27.1 1.75.83 2.05.98.3.15.5.22.57.35.08.12.08.72-.17 1.42Z"></path></svg>
          <span>+54 9 11 5528-4015</span>
        </a>
        <a href="mailto:contact.dandydancers@gmail.com">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>
          <span>contact.dandydancers@gmail.com</span>
        </a>
      </address>
    </div>

    <nav class="section-links" aria-label={copy.navigationLabel}>
      <h2>{copy.navigationTitle}</h2>
      {#each links as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>

    <div class="social-column">
      <h2>{copy.socialTitle}</h2>
      <a class="social-link" href="https://www.instagram.com/dandydancers/" target="_blank" rel="noreferrer">
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle class="fill" cx="17.5" cy="6.5" r="1"></circle></svg>
        </span>
        <span>@dandydancers</span>
      </a>
    </div>
  </div>

  <div class="container footer-bottom">
    <p>© 2026 Dandy Dancers</p>
  </div>
</footer>

<style>
  footer { padding: clamp(3rem, 7vw, 5rem) 0 1.5rem; color: var(--white); background: var(--header-color); }
  .footer-grid { display: grid; gap: 2.5rem; }
  .brand { display: inline-block; width: 10rem; }
  .logo { display: block; width: 100%; aspect-ratio: 500 / 299; background: var(--asset-logo-on-dark) center / contain no-repeat; }
  address { display: grid; margin-top: 1.5rem; gap: .85rem; font-style: normal; }
  address a, .section-links a, .social-link { color: color-mix(in srgb, var(--white) 78%, var(--transparent)); text-decoration: none; }
  address a { display: flex; min-width: 0; align-items: center; gap: .65rem; font-size: .875rem; }
  address span { overflow-wrap: anywhere; }
  address svg, .social-icon svg { width: 1.15rem; height: 1.15rem; flex: 0 0 auto; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.75; }
  address a:first-child svg { fill: currentColor; stroke: none; }
  .section-links { display: flex; align-items: flex-start; flex-direction: column; gap: .8rem; }
  h2 { margin: 0 0 .45rem; color: var(--primary-200); font-size: .75rem; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
  .section-links a, .social-link { font-size: .875rem; font-weight: 600; }
  .social-link { display: inline-flex; align-items: center; gap: .65rem; }
  .social-icon { display: grid; width: 2.5rem; height: 2.5rem; place-items: center; border: 1px solid color-mix(in srgb, var(--white) 24%, var(--transparent)); border-radius: 50%; }
  .social-icon .fill { fill: currentColor; stroke: none; }
  a:hover { color: var(--white); }
  a:focus-visible { border-radius: .25rem; outline: 2px solid var(--primary-200); outline-offset: 3px; }
  .footer-bottom { margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid color-mix(in srgb, var(--white) 12%, var(--transparent)); }
  .footer-bottom p { margin: 0; color: color-mix(in srgb, var(--white) 48%, var(--transparent)); font-size: .72rem; }

  @media (min-width: 48rem) {
    .footer-grid { grid-template-columns: minmax(16rem, 1.35fr) minmax(11rem, .8fr) minmax(11rem, .8fr); align-items: start; gap: clamp(2rem, 6vw, 6rem); }
  }
</style>
