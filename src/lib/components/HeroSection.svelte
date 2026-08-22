<script>
  import { getWhatsAppHref, taxiDancerInquiryMessage } from '$lib/config.js';

  let { copy, modalCopy, registrationHref } = $props();
  const whatsappHref = getWhatsAppHref(taxiDancerInquiryMessage);
  /** @type {HTMLDialogElement} */
  let modal;

  function openModal() {
    modal.showModal();
  }

  function closeModal() {
    modal.close();
  }

  /** @param {MouseEvent} event */
  function closeOnBackdrop(event) {
    if (event.target === modal) closeModal();
  }
</script>

<section class="hero">
  <div class="container hero-layout">
    <div class="hero-copy">
      <h1>{copy.title}</h1>
      <p class="supporting">
        {copy.supporting}
        <button class="definition-trigger" type="button" onclick={openModal}>{modalCopy.title}</button>
      </p>
      <div class="actions">
        <a class="primary-cta" href={whatsappHref} target="_blank" rel="noreferrer">{copy.cta}</a>
        <a class="registration-link" href={registrationHref}>{copy.registrationCta}</a>
      </div>
    </div>

  </div>
</section>

<dialog bind:this={modal} aria-labelledby="taxi-dancer-modal-title" onclick={closeOnBackdrop}>
  <div class="modal-content">
    <button class="close" type="button" aria-label={modalCopy.modalClose} onclick={closeModal}>
      <span aria-hidden="true">×</span>
    </button>
    <h2 id="taxi-dancer-modal-title">{modalCopy.title}</h2>
    <p>{modalCopy.description}</p>
  </div>
</dialog>

<style>
  .hero {
    display: grid;
    min-height: calc(100svh - var(--header-main-height) - var(--header-tagline-height));
    padding-block: clamp(3rem, 8vw, 6rem);
    overflow-x: clip;
    background:
      linear-gradient(
        90deg,
        color-mix(in srgb, var(--color-primary-900) 78%, transparent) 0%,
        color-mix(in srgb, var(--color-primary-900) 56%, transparent) 52%,
        color-mix(in srgb, var(--color-primary-900) 32%, transparent) 100%
      ),
      url('/images/main-hero.webp') center / cover no-repeat;
  }

  .hero-layout {
    display: grid;
    gap: 3rem;
    align-items: center;
  }

  .hero-copy {
    max-width: 42rem;
    margin-inline: auto;
    text-align: center;
  }

  h1 {
    max-width: 12ch;
    margin-bottom: 1.25rem;
    margin-inline: auto;
    color: #ffffff;
    font-size: clamp(3rem, 13vw, 6.5rem);
    line-height: 0.95;
    letter-spacing: -0.055em;
  }

  .supporting {
    max-width: 38rem;
    margin-bottom: 1.75rem;
    margin-inline: auto;
    color: rgba(255, 255, 255, 0.92);
    line-height: 1.65;
  }

  .definition-trigger {
    display: inline;
    margin: 0 0 0 0.25rem;
    padding: 0;
    border: 0;
    color: #ffffff;
    background: transparent;
    font: inherit;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--color-primary-200);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
    text-shadow: 0 1px 0.4rem rgba(26, 6, 34, 0.75);
    cursor: pointer;
  }

  .definition-trigger:hover {
    color: var(--color-primary-100);
  }

  .definition-trigger:focus-visible,
  .close:focus-visible {
    outline: 3px solid var(--color-primary-200);
    outline-offset: 3px;
  }

  .actions {
    display: inline-grid;
    justify-items: center;
    gap: 0.75rem;
  }

  .primary-cta {
    display: inline-flex;
    min-height: 3rem;
    padding: 0.8rem 1.25rem;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-primary);
    border-radius: 999px;
    color: #ffffff;
    background: var(--color-primary);
    font-weight: 700;
    text-decoration: none;
  }

  .registration-link {
    color: var(--color-primary-200);
    font-size: 0.875rem;
    font-weight: 600;
    text-underline-offset: 0.2em;
  }

  dialog {
    width: min(calc(100% - 2rem), 38rem);
    max-height: calc(100vh - 2rem);
    padding: 0;
    overflow: auto;
    border: 1px solid var(--color-primary-200);
    border-radius: 1rem;
    color: var(--color-text);
    background: var(--color-background);
    box-shadow: 0 1.5rem 4rem rgba(26, 6, 34, 0.28);
  }

  dialog::backdrop {
    background: rgba(26, 6, 34, 0.68);
    backdrop-filter: blur(3px);
  }

  .modal-content {
    position: relative;
    padding: clamp(2rem, 7vw, 3.5rem);
  }

  .modal-content h2 {
    max-width: 18ch;
    margin-bottom: 1.25rem;
    font-size: clamp(1.75rem, 5vw, 2.25rem);
    line-height: 1.15;
  }

  .modal-content > p {
    margin-bottom: 0;
    color: var(--color-body);
    font-size: 1.0625rem;
    line-height: 1.5;
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    place-items: center;
    border: 0;
    color: var(--color-heading);
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .close:hover {
    color: var(--color-primary);
  }

  @media (min-width: 55rem) {
    .hero-copy {
      margin-inline: 0;
      text-align: left;
    }

    h1,
    .supporting {
      margin-inline: 0;
    }
  }
</style>
