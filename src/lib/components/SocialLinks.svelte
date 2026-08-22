<script>
  import { socialLinks } from '$lib/config.js';

  let { ariaLabel, whatsappMessage, compact = false } = $props();

  /** @param {(typeof socialLinks)[number]} social */
  function getHref(social) {
    if (social.id !== 'whatsapp' || !whatsappMessage) {
      return social.href;
    }

    const separator = social.href.includes('?') ? '&' : '?';
    return `${social.href}${separator}text=${encodeURIComponent(whatsappMessage)}`;
  }
</script>

{#if socialLinks.length > 0}
  <nav class:compact aria-label={ariaLabel}>
    {#each socialLinks as social (social.id)}
      {@const href = getHref(social)}
      <a
        class="social-item"
        {href}
        aria-label={social.label}
        title={social.label}
        target={social.external ? '_blank' : undefined}
        rel={social.external ? 'noreferrer' : undefined}
      >
        {#if social.id === 'instagram'}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5"></rect>
            <circle cx="12" cy="12" r="4"></circle>
            <circle class="fill" cx="17.5" cy="6.5" r="1"></circle>
          </svg>
        {:else if social.id === 'email'}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            <path d="m4 7 8 6 8-6"></path>
          </svg>
        {:else if social.id === 'whatsapp'}
          <svg class="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.9L2 22l5.25-1.55A9.96 9.96 0 1 0 12.04 2Zm5.81 13.93c-.25.7-1.47 1.34-2.03 1.42-.52.08-1.18.11-1.9-.12-.44-.14-1-.32-1.72-.63-3.03-1.31-5-4.35-5.15-4.55-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.38.82-.38h.59c.19.01.44-.07.69.53.25.6.85 2.08.93 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.18.3.77 1.28 1.67 1.81 1.16.7 2.13.92 2.43 1.02.3.1.47.08.65-.12.17-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.27.1 1.75.83 2.05.98.3.15.5.22.57.35.08.12.08.72-.17 1.42Z"></path>
          </svg>
        {/if}
        <span class="label">{social.label}</span>
      </a>
    {/each}
  </nav>
{/if}

<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
  }

  .social-item {
    display: inline-flex;
    min-height: 2.75rem;
    align-items: center;
    gap: 0.4rem;
    color: inherit;
    font-size: 0.875rem;
    font-weight: 650;
    text-decoration: none;
    text-underline-offset: 0.2em;
  }

  a.social-item:hover {
    text-decoration: underline;
  }

  a.social-item:focus-visible {
    border-radius: 0.25rem;
    outline: 2px solid currentColor;
    outline-offset: 3px;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    flex: 0 0 auto;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.75;
  }

  svg .fill {
    fill: currentColor;
    stroke: none;
  }

  svg.brand-icon {
    fill: currentColor;
    stroke: none;
  }

  nav.compact {
    flex-wrap: nowrap;
    gap: 0.2rem;
  }

  .compact .social-item {
    width: 1.8rem;
    min-height: 1.8rem;
    justify-content: center;
  }

  .compact .label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .compact svg {
    width: 1.05rem;
    height: 1.05rem;
  }
</style>
