<script>
  let { copy } = $props();
  let activeStep = $state(0);

  function nextStep() {
    activeStep = (activeStep + 1) % copy.steps.length;
  }
</script>

<div class="preview">
  <p class="label">{copy.label}</p>

  <button class="phone" type="button" onclick={nextStep} aria-label={copy.nextStep}>
    <svg viewBox="0 0 280 540" aria-hidden="true">
      <rect x="4" y="4" width="272" height="532" rx="42" fill="#fff" stroke="currentColor" stroke-width="8" />
      <rect x="101" y="17" width="78" height="10" rx="5" fill="currentColor" />
      <line x1="28" y1="102" x2="252" y2="102" stroke="#eed0fa" stroke-width="2" />
    </svg>

    <span class="screen-title">{copy.steps[activeStep]}</span>
    <span class="screen-hint">{copy.tapHint}</span>
  </button>

  <div class="progress" aria-label={copy.progressLabel}>
    {#each copy.steps as _, index}
      <button
        type="button"
        class:active={index === activeStep}
        aria-label={`${index + 1}`}
        aria-current={index === activeStep ? 'step' : undefined}
        onclick={() => (activeStep = index)}
      ></button>
    {/each}
  </div>
</div>

<style>
  .preview {
    display: grid;
    justify-items: center;
  }

  .label {
    margin-bottom: 0.75rem;
    color: var(--color-muted);
    font-size: 0.6875rem;
  }

  .phone {
    position: relative;
    width: min(70vw, 17.5rem);
    padding: 0;
    border: 0;
    color: var(--color-primary-900);
    background: transparent;
    cursor: pointer;
  }

  .phone:focus-visible {
    border-radius: 2.75rem;
    outline: 3px solid var(--color-primary);
    outline-offset: 0.35rem;
  }

  svg {
    width: 100%;
  }

  .screen-title {
    position: absolute;
    top: 3.7rem;
    right: 2rem;
    left: 2rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
  }

  .screen-hint {
    position: absolute;
    right: 2rem;
    bottom: 2.25rem;
    left: 2rem;
    color: var(--color-muted);
    font-size: 0.6875rem;
    text-align: center;
  }

  .progress {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .progress button {
    width: 0.625rem;
    height: 0.625rem;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: var(--color-primary-200);
    cursor: pointer;
  }

  .progress button.active {
    background: var(--color-primary);
  }
</style>

