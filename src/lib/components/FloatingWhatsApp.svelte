<script>
  import { getWhatsAppHref, taxiDancerInquiryMessage } from '$lib/config.js';

  const whatsappHref = getWhatsAppHref(taxiDancerInquiryMessage);
</script>

<a
  class="whatsapp-button"
  href={whatsappHref}
  aria-label="WhatsApp"
  title="WhatsApp"
  target="_blank"
  rel="noreferrer"
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.9L2 22l5.25-1.55A9.96 9.96 0 1 0 12.04 2Zm5.81 13.93c-.25.7-1.47 1.34-2.03 1.42-.52.08-1.18.11-1.9-.12-.44-.14-1-.32-1.72-.63-3.03-1.31-5-4.35-5.15-4.55-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.38.82-.38h.59c.19.01.44-.07.69.53.25.6.85 2.08.93 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.18.3.77 1.28 1.67 1.81 1.16.7 2.13.92 2.43 1.02.3.1.47.08.65-.12.17-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.27.1 1.75.83 2.05.98.3.15.5.22.57.35.08.12.08.72-.17 1.42Z"></path>
  </svg>
</a>

<style>
  .whatsapp-button {
    position: fixed;
    z-index: 50;
    right: 1rem;
    bottom: 1rem;
    display: grid;
    width: 3.75rem;
    height: 3.75rem;
    place-items: center;
    border: 2px solid rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    color: #ffffff;
    background: #25d366;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.22);
    transition:
      background-color 150ms ease,
      transform 150ms ease;
  }

  .whatsapp-button:hover {
    background: #1ebe5d;
    transform: translateY(-2px);
  }

  .whatsapp-button:focus-visible {
    outline: 3px solid var(--color-primary-200);
    outline-offset: 3px;
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }

  @media (min-width: 48rem) {
    .whatsapp-button {
      right: 1.5rem;
      bottom: 1.5rem;
      width: 4rem;
      height: 4rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .whatsapp-button {
      transition: none;
    }
  }
</style>
