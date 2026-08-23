<script>
  let { copy } = $props();
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

<section class="section" id="about">
  <div class="container about-layout">
    <img
      class="portrait"
      src="/images/franco-cespi.webp"
      alt="Franco Cespi, Dandy Dancers Founder"
      width="720"
      height="720"
      loading="lazy"
    />
    <div class="content">
      <p class="eyebrow">{copy.eyebrow}</p>
      <h2 class="section-title">{copy.title}</h2>
      <p>{copy.description}</p>
      <button class="more-link" type="button" onclick={openModal}>{copy.moreLink}</button>
    </div>
  </div>
</section>

<dialog bind:this={modal} aria-labelledby="founder-modal-title" onclick={closeOnBackdrop}>
  <div class="modal-content">
    <button class="close" type="button" aria-label={copy.modalClose} onclick={closeModal}>
      <span aria-hidden="true">×</span>
    </button>
    <h2 id="founder-modal-title">{copy.modalTitle}</h2>
    <p>{copy.modalDescription}</p>
    <div class="profile-links">
      <a href="https://francocespi.com/" target="_blank" rel="noreferrer">{copy.websiteLink}</a>
      <a href="https://www.instagram.com/franco.cespi/" target="_blank" rel="noreferrer">{copy.instagramLink}</a>
    </div>
  </div>
</dialog>

<style>
  .about-layout {
    display: grid;
    justify-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  .portrait {
    width: min(100%, 18rem);
    aspect-ratio: 1;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
  }

  .about-layout :global(.section-title) {
    margin-inline: auto;
  }

  .content {
    max-width: 40rem;
    color: var(--color-body);
    font-size: 1.0625rem;
    line-height: 1.2rem;
  }

  .content > p:not(.eyebrow) {
    margin-bottom: 1rem;
  }

  .more-link {
    padding: 0;
    border: 0;
    color: var(--color-primary-700);
    background: transparent;
    font: inherit;
    font-size: .875rem;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: .2em;
    cursor: pointer;
  }

  .more-link:hover,
  .close:hover {
    color: var(--color-primary);
  }

  .more-link:focus-visible,
  .close:focus-visible,
  .profile-links a:focus-visible {
    outline: 3px solid var(--color-primary-200);
    outline-offset: 3px;
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
    box-shadow: 0 1.5rem 4rem rgb(26 6 34 / 28%);
  }

  dialog::backdrop {
    background: rgb(26 6 34 / 68%);
    backdrop-filter: blur(3px);
  }

  .modal-content {
    position: relative;
    padding: clamp(2rem, 7vw, 3.5rem);
  }

  .modal-content h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.75rem, 5vw, 2.25rem);
    line-height: 1.15;
  }

  .modal-content > p {
    margin-bottom: 1.5rem;
    color: var(--color-body);
    font-size: 1.0625rem;
    line-height: 1.35;
  }

  .profile-links {
    display: flex;
    flex-wrap: wrap;
    gap: .75rem 1.25rem;
  }

  .profile-links a {
    color: var(--color-primary-700);
    font-weight: 600;
    text-underline-offset: .2em;
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

  @media (min-width: 48rem) {
    .about-layout {
      grid-template-columns: minmax(14rem, 18rem) minmax(0, 40rem);
      justify-content: center;
      align-items: center;
      gap: clamp(2rem, 6vw, 5rem);
      text-align: left;
    }

    .about-layout :global(.section-title) {
      margin-inline: 0;
    }
  }
</style>
