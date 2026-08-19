<script>
  import { socialLinks } from '$lib/config.js';

  let { ariaLabel, comingSoonLabel, whatsappMessage, compact = false } = $props();

  /** @param {(typeof socialLinks)[number]} social */
  function getHref(social) {
    if (!social.href) {
      return '';
    }

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
      {#if social.href}
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
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"></path>
              <path d="M8.5 8.5c.4 2.9 2.1 4.6 5 5l1.3-1.3 2.1 1c-.5 1.9-1.8 2.8-3.7 2.4-3.4-.7-5.9-3.2-6.6-6.6-.4-1.9.5-3.2 2.4-3.7l1 2.1-1.5 1.1Z"></path>
            </svg>
          {/if}
          <span class="label">{social.label}</span>
        </a>
      {:else}
        <span
          class="social-item unavailable"
          aria-label={`${social.label} — ${comingSoonLabel}`}
          aria-disabled="true"
          title={`${social.label} — ${comingSoonLabel}`}
        >
          {#if social.id === 'whatsapp'}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"></path>
              <path d="M8.5 8.5c.4 2.9 2.1 4.6 5 5l1.3-1.3 2.1 1c-.5 1.9-1.8 2.8-3.7 2.4-3.4-.7-5.9-3.2-6.6-6.6-.4-1.9.5-3.2 2.4-3.7l1 2.1-1.5 1.1Z"></path>
            </svg>
          {/if}
          <span class="label">{social.label}</span>
          <span class="soon">{comingSoonLabel}</span>
        </span>
      {/if}
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

  .unavailable {
    opacity: 0.48;
    cursor: not-allowed;
  }

  .soon {
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
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

  .compact .label,
  .compact .soon {
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
