<script>
  let { copy } = $props();
</script>

<section class="section why" id="why">
  <div class="container">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title">{copy.title}</h2>
    <p class="section-intro">{copy.intro}</p>

    <div class="issues">
      {#each copy.items as item, index}
        <details open={index === 0}>
          <summary>
            <span>{item.title}</span>
            <span class="symbol" aria-hidden="true">+</span>
          </summary>
          <p>{item.description}</p>
        </details>
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

  details {
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    background: var(--color-background);
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  .symbol {
    color: var(--color-primary);
    font-size: 1.5rem;
    line-height: 1;
    transition: transform 150ms ease;
  }

  details[open] .symbol {
    transform: rotate(45deg);
  }

  details p {
    margin: 0;
    padding: 0 1.25rem 1.25rem;
    color: var(--color-muted);
    line-height: 1.65;
  }
</style>

