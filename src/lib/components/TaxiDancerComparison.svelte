<script>
  let { copy, ctaHref, ctaLabel } = $props();
  /** @type {HTMLDivElement | undefined} */
  let carousel;
  let activeComparison = $state(0);

  function handleScroll() {
    const carouselElement = carousel;
    if (!carouselElement) return;
    const cards = /** @type {HTMLElement[]} */ (Array.from(carouselElement.children));
    activeComparison = cards.reduce((closestIndex, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - carouselElement.scrollLeft);
      const closestDistance = Math.abs(cards[closestIndex].offsetLeft - carouselElement.scrollLeft);
      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
  }

  /** @param {number} index */
  function scrollToComparison(index) {
    const carouselElement = carousel;
    const card = /** @type {HTMLElement | undefined} */ (carouselElement?.children[index]);
    if (!card) return;
    carouselElement?.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  }
</script>

<section class="section comparison" aria-labelledby="comparison-title">
  <div class="container">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title" id="comparison-title">{copy.title}</h2>
    <p class="section-intro">{copy.intro}</p>

    <div class="comparison-head" aria-hidden="true">
      <span></span>
      <strong>{copy.columns.solo}</strong>
      <strong>{copy.columns.intermediary}</strong>
      <strong class="dandy-heading">{copy.columns.dandy}</strong>
    </div>

    <div class="comparison-rows" bind:this={carousel} onscroll={handleScroll}>
      {#each copy.items as item}
        <section class="comparison-row">
          <h3>{item.title}</h3>
          <div><strong class="mobile-label">{copy.columns.solo}</strong><p>{item.solo}</p></div>
          <div><strong class="mobile-label">{copy.columns.intermediary}</strong><p>{item.intermediary}</p></div>
          <div class="dandy"><strong class="mobile-label">{copy.columns.dandy}</strong><p>{item.dandy}</p></div>
        </section>
      {/each}
    </div>
    <div class="carousel-progress" aria-label={copy.carouselLabel}>
      {#each copy.items as _, index}
        <button
          type="button"
          class:active={index === activeComparison}
          aria-label={`${index + 1}`}
          aria-current={index === activeComparison ? 'step' : undefined}
          onclick={() => scrollToComparison(index)}
        ></button>
      {/each}
    </div>
    <p class="carousel-hint">{copy.swipeHint}</p>

    <a class="cta" href={ctaHref} target="_blank" rel="noreferrer">{ctaLabel}</a>
  </div>
</section>

<style>
  .comparison { color: var(--text-color); background: var(--background-color); }
  .comparison :global(.eyebrow),
  .comparison :global(.section-title),
  .comparison :global(.section-intro) { margin-inline: auto; text-align: center; }
  .comparison :global(.eyebrow) { color: var(--primary-500); }
  .comparison-head { display: none; }
  .comparison-rows { display: flex; gap: .75rem; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
  .comparison-rows::-webkit-scrollbar { display: none; }
  .comparison-row { display: grid; min-width: 0; box-sizing: border-box; flex: 0 0 calc(100% - 1.5rem); grid-template-columns: repeat(2, minmax(0, 1fr)); overflow: hidden; border: 1px solid var(--primary-200); border-radius: 1rem; background: var(--white); scroll-snap-align: start; scroll-snap-stop: always; }
  .comparison-row h3 { grid-column: 1 / -1; margin: 0; padding: 1rem; color: var(--heading-color); font-size: 1rem; font-weight: 600; text-align: center; }
  .comparison-row div { display: flex; min-height: 6.5rem; padding: .85rem 1rem; align-items: center; justify-content: center; flex-direction: column; border-top: 1px solid var(--primary-100); text-align: center; }
  .comparison-row div:nth-of-type(2) { border-left: 1px solid var(--primary-100); }
  .comparison-row .dandy { grid-column: 1 / -1; min-height: 5.5rem; border-left: 0; background: var(--primary-50); }
  .comparison-row p { margin: .25rem 0 0; font-size: .875rem; line-height: 1.2rem; }
  .mobile-label { color: var(--muted-color); font-size: .7rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
  .dandy .mobile-label { color: var(--primary-500); }
  .carousel-progress { display: flex; gap: .5rem; margin-top: 1rem; justify-content: center; }
  .carousel-progress button { width: .625rem; height: .625rem; padding: 0; border: 0; border-radius: 50%; background: var(--primary-200); cursor: pointer; }
  .carousel-progress button.active { background: var(--primary-500); box-shadow: 0 0 0 3px var(--primary-50); }
  .carousel-hint { margin: .5rem 0 0; color: var(--muted-color); font-size: .75rem; text-align: center; }
  .cta { display: flex; width: fit-content; min-height: 3rem; margin: 2rem auto 0; padding: .8rem 1.25rem; align-items: center; justify-content: center; border-radius: 999px; color: var(--white); background: var(--primary-500); font-weight: 700; text-decoration: none; }

  @media (min-width: 64rem) {
    .comparison-head,
    .comparison-row { display: grid; grid-template-columns: minmax(10rem, .8fr) repeat(3, minmax(0, 1fr)); }
    .comparison-head { align-items: end; }
    .comparison-head strong { padding: .85rem 1rem; color: var(--muted-color); font-size: .8rem; }
    .comparison-head .dandy-heading { border-radius: .75rem .75rem 0 0; color: var(--primary-900); background: var(--primary-50); }
    .comparison-rows { display: grid; gap: .65rem; overflow: visible; }
    .comparison-row { align-items: stretch; }
    .comparison-row h3 { grid-column: auto; text-align: left; }
    .comparison-row h3,
    .comparison-row div { display: flex; min-height: 0; padding: 1rem; align-items: center; justify-content: flex-start; flex-direction: row; text-align: left; }
    .comparison-row div,
    .comparison-row div:nth-of-type(2),
    .comparison-row .dandy { grid-column: auto; border-top: 0; border-left: 1px solid var(--primary-100); }
    .comparison-row p { margin: 0; }
    .mobile-label { display: none; }
    .carousel-progress,
    .carousel-hint { display: none; }
  }
</style>
