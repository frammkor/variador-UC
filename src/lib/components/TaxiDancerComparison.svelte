<script>
  let { copy, ctaHref } = $props();
</script>

<section class="section comparison" aria-labelledby="comparison-title">
  <div class="container">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title" id="comparison-title">{copy.title}</h2>
    <p class="section-intro">{copy.intro}</p>

    <div class="comparison-head" aria-hidden="true">
      <span></span>
      <strong>{copy.columns.solo}</strong>
      <strong>{copy.columns.organizer}</strong>
      <strong class="dandy-heading">Dandy Dancers</strong>
    </div>

    <div class="comparison-rows">
      {#each copy.items as item}
        <section class="comparison-row">
          <h3>{item.title}</h3>
          <div><strong class="mobile-label">{copy.columns.solo}</strong><p>{item.solo}</p></div>
          <div><strong class="mobile-label">{copy.columns.organizer}</strong><p>{item.organizer}</p></div>
          <div class="dandy"><strong class="mobile-label">Dandy Dancers</strong><p>{item.dandy}</p></div>
        </section>
      {/each}
    </div>

    <a class="cta" href={ctaHref} target="_blank" rel="noreferrer">{copy.cta}</a>
  </div>
</section>

<style>
  .comparison { color: var(--color-text); background: var(--color-background); }
  .comparison :global(.eyebrow),
  .comparison :global(.section-title),
  .comparison :global(.section-intro) { margin-inline: auto; text-align: center; }
  .comparison :global(.eyebrow) { color: var(--color-primary); }
  .comparison-head { display: none; }
  .comparison-rows { display: grid; gap: 1rem; }
  .comparison-row { display: grid; overflow: hidden; border: 1px solid var(--color-primary-200); border-radius: 1rem; background: #fff; }
  .comparison-row h3 { margin: 0; padding: 1rem; color: var(--color-heading); font-size: 1rem; font-weight: 600; }
  .comparison-row div { padding: .85rem 1rem; border-top: 1px solid var(--color-primary-100); }
  .comparison-row .dandy { background: var(--color-primary-50); }
  .comparison-row p { margin: .25rem 0 0; font-size: .875rem; line-height: 1.35; }
  .mobile-label { color: var(--color-muted); font-size: .7rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
  .dandy .mobile-label { color: var(--color-primary-700); }
  .cta { display: flex; width: fit-content; min-height: 3rem; margin: 2rem auto 0; padding: .8rem 1.25rem; align-items: center; justify-content: center; border-radius: 999px; color: #fff; background: var(--color-primary); font-weight: 700; text-decoration: none; }

  @media (min-width: 64rem) {
    .comparison-head,
    .comparison-row { display: grid; grid-template-columns: minmax(10rem, .8fr) repeat(3, minmax(0, 1fr)); }
    .comparison-head { align-items: end; }
    .comparison-head strong { padding: .85rem 1rem; color: var(--color-muted); font-size: .8rem; }
    .comparison-head .dandy-heading { border-radius: .75rem .75rem 0 0; color: var(--color-primary-900); background: var(--color-primary-50); }
    .comparison-rows { gap: .65rem; }
    .comparison-row { align-items: stretch; }
    .comparison-row h3,
    .comparison-row div { display: flex; padding: 1rem; align-items: center; }
    .comparison-row div { border-top: 0; border-left: 1px solid var(--color-primary-100); }
    .comparison-row p { margin: 0; }
    .mobile-label { display: none; }
  }
</style>
