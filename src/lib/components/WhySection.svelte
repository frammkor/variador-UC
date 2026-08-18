<script>
  let { copy } = $props();
  let openItems = $state(new Set([0]));

  /** @param {number} index */
  function toggleItem(index) {
    const nextOpenItems = new Set(openItems);

    if (nextOpenItems.has(index)) {
      nextOpenItems.delete(index);
    } else {
      nextOpenItems.add(index);
    }

    openItems = nextOpenItems;
  }
</script>

<section class="section why" id="why">
  <div class="container">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title">{copy.title}</h2>
    <p class="section-intro">{copy.intro}</p>

    <div class="issues">
      {#each copy.items as item, index}
        <section class="issue">
          <h3>
            <button
              type="button"
              aria-expanded={openItems.has(index)}
              aria-controls={`reason-${index}`}
              onclick={() => toggleItem(index)}
            >
            <span>{item.title}</span>
            <svg class:open={openItems.has(index)} class="chevron" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            </button>
          </h3>

          <div
            class:open={openItems.has(index)}
            class="answer"
            id={`reason-${index}`}
            aria-hidden={!openItems.has(index)}
          >
            <div class="answer-content">
              <p>{item.description}</p>
            </div>
          </div>
        </section>
      {/each}
    </div>
  </div>
</section>

<style>
  .why {
    background: var(--color-surface);
  }

  .issues {
    display: grid;
    gap: 0.75rem;
    max-width: 52rem;
  }

  .issue {
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    background: var(--color-background);
  }

  h3 {
    margin: 0;
  }

  h3 button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem;
    border: 0;
    border-radius: 0.75rem;
    background: transparent;
    font-weight: 700;
    text-align: left;
    cursor: pointer;
  }

  h3 button:focus-visible {
    outline: 3px solid var(--color-primary-200);
    outline-offset: 2px;
  }

  .chevron {
    width: 1.25rem;
    height: 1.25rem;
    flex: 0 0 auto;
    color: var(--color-primary);
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    transition: transform 150ms ease;
  }

  .chevron.open {
    transform: rotate(180deg);
  }

  .answer {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition:
      grid-template-rows 250ms ease,
      opacity 180ms ease;
  }

  .answer.open {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .answer-content {
    overflow: hidden;
  }

  .answer p {
    margin: 0;
    padding: 0 1.25rem 1.25rem;
    color: var(--color-body);
    line-height: 1.65;
  }

  @media (prefers-reduced-motion: reduce) {
    .answer,
    .chevron {
      transition: none;
    }
  }
</style>
