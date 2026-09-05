<script>
  import { fade } from 'svelte/transition';

  let { copy, previewCopy, PreviewComponent, tone = 'purple' } = $props();
  let activeStep = $state(0);
</script>

<section
  class:purple={tone === 'purple'}
  class:light={tone === 'light'}
  class="section preview-section"
  aria-labelledby="preview-title"
>
  <div class="container preview-layout">
    <div class="preview-copy" aria-live="polite">
      {#key activeStep}
        <div class="step-copy" transition:fade={{ duration: 220 }}>
          <h2 class="section-title" id="preview-title">{copy.steps[activeStep].title}</h2>
          <p>{copy.steps[activeStep].description}</p>
        </div>
      {/key}
    </div>

    <div class="preview-demo">
      <PreviewComponent copy={previewCopy} bind:activeStep />
    </div>
  </div>
</section>

<style>
  .preview-section.purple {
    color: var(--white);
    background: var(--primary-500);
  }

  .preview-section.light {
    color: var(--text-color);
    background: var(--background-color);
  }

  .preview-layout {
    display: grid;
    justify-items: center;
    gap: 1rem;
  }

  .purple :global(.label) {
    color: var(--primary-200);
  }

  .purple :global(.progress button) {
    background: color-mix(in srgb, var(--white) 38%, var(--transparent));
  }

  .purple :global(.progress button.active) {
    background: var(--white);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--white) 18%, var(--transparent));
  }

  .preview-copy {
    display: grid;
    width: 100%;
    max-width: 34rem;
    min-height: 8rem;
    align-items: center;
    text-align: center;
  }

  .step-copy {
    grid-area: 1 / 1;
  }

  .preview-copy .section-title {
    margin-inline: auto;
  }

  .purple .preview-copy .section-title,
  .purple .preview-copy p {
    color: var(--white);
  }

  .preview-copy p {
    margin-bottom: 0;
    line-height: 1.2rem;
  }

  .preview-demo {
    display: grid;
    justify-items: center;
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

    .preview-copy .section-title {
      margin-inline: 0;
    }

    .preview-demo {
      grid-column: 1;
      grid-row: 1;
    }
  }
</style>
