<script>
  import PhonePreview from './PhonePreview.svelte';

  let { copy, previewCopy } = $props();
</script>

<section class="section preview-section" aria-labelledby="preview-title">
  <div class="container preview-layout">
    <div class="preview-copy">
      <h2 class="section-title" id="preview-title">{copy.title}</h2>
      <p>{copy.description}</p>
    </div>

    <div class="preview-demo">
      <PhonePreview copy={previewCopy} />
    </div>
  </div>
</section>

<style>
  .preview-section {
    color: #ffffff;
    background: var(--color-primary-700);
  }

  .preview-layout {
    display: grid;
    justify-items: center;
    gap: 2.5rem;
  }

  .preview-section :global(.label) {
    color: var(--color-primary-200);
  }

  .preview-copy {
    max-width: 34rem;
    text-align: center;
  }

  .preview-demo {
    display: grid;
    justify-items: center;
  }

  .preview-copy .section-title,
  .preview-copy p {
    color: #ffffff;
  }

  .preview-copy p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  @media (min-width: 55rem) {
    .preview-layout {
      grid-template-columns: minmax(17rem, 0.75fr) minmax(0, 1.25fr);
      gap: 5rem;
      align-items: center;
    }

    .preview-copy {
      grid-column: 2;
      grid-row: 1;
      justify-self: start;
      text-align: left;
    }

    .preview-demo {
      grid-column: 1;
      grid-row: 1;
    }
  }
</style>
