<script>
  let { copy, registrationHref } = $props();
</script>

<section class="section service" id="taxi-dancers">
  <div class="container content">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title">{copy.title}</h2>
    <p class="section-intro">{copy.description}</p>
    <button type="button" disabled>{copy.cta}</button>
    <a class="registration-link" href={registrationHref}>{copy.registrationCta}</a>
  </div>
</section>

<style>
  .service {
    color: #ffffff;
    background: var(--color-primary-700);
  }

  .service :global(.eyebrow) {
    color: var(--color-primary-200);
  }

  .service :global(.section-title),
  .service :global(.section-intro) {
    color: #ffffff;
  }

  .content {
    display: grid;
    justify-items: start;
  }

  button {
    padding: 0.8rem 1.1rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    color: var(--color-primary-200);
    background: color-mix(in srgb, #ffffff 12%, transparent);
    cursor: not-allowed;
  }

  .registration-link {
    margin-top: 1rem;
    color: #ffffff;
    font-weight: 700;
    text-underline-offset: 0.2em;
  }
</style>
