<script>
  let { copy } = $props();
</script>

<section class="section faq" id="faq" aria-labelledby="faq-title">
  <div class="container faq-layout">
    <div class="heading">
      <p class="eyebrow">{copy.eyebrow}</p>
      <h2 class="section-title" id="faq-title">{copy.title}</h2>
    </div>

    <div class="questions">
      {#each copy.items as item, index}
        <details open={index === 0}>
          <summary>
            <span>{item.question}</span>
            <span class="toggle" aria-hidden="true"></span>
          </summary>
          <div class="answer"><p>{item.answer}</p></div>
        </details>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq { background: var(--gray-100); }
  .faq-layout { display: grid; gap: 2.5rem; }
  .heading { text-align: center; }
  .heading :global(.section-title) { margin-inline: auto; }
  .questions { display: grid; gap: 1rem; interpolate-size: allow-keywords; }
  details { overflow: hidden; border: 1px solid var(--gray-200); border-radius: 1rem; background: var(--white); transition: background-color .2s ease, border-color .2s ease; }
  details[open] { border-color: var(--primary-500); background: var(--white); }
  details::details-content { height: 0; overflow: hidden; opacity: 0; transition: height .28s ease, opacity .2s ease, content-visibility .28s allow-discrete; }
  details[open]::details-content { height: auto; opacity: 1; }
  summary { display: flex; min-height: 4.5rem; padding: 1rem 1.1rem; align-items: center; justify-content: space-between; gap: 1rem; color: var(--gray-700); font-size: 1rem; font-weight: 650; line-height: 1.25; cursor: pointer; list-style: none; }
  summary::-webkit-details-marker { display: none; }
  summary:focus-visible { outline: 3px solid var(--primary-200); outline-offset: -3px; }
  .toggle { display: grid; width: 1.65rem; height: 1.65rem; flex: 0 0 auto; place-items: center; border: 1px solid var(--gray-200); border-radius: 50%; color: var(--gray-500); transition: transform .2s ease; }
  .toggle::before { width: .34rem; height: .34rem; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; content: ''; transform: translateY(-.08rem) rotate(45deg); }
  details[open] .toggle { transform: rotate(180deg); }
  .answer { padding: 0 1.1rem 1.25rem; }
  .answer p { margin: 0; color: var(--gray-600); font-size: .9375rem; line-height: 1.35rem; }

  @media (prefers-reduced-motion: reduce) {
    details,
    details::details-content,
    .toggle { transition: none; }
  }

  @media (min-width: 48rem) {
    .faq-layout { grid-template-columns: minmax(14rem, .8fr) minmax(0, 1.2fr); align-items: start; gap: clamp(3rem, 8vw, 8rem); }
    .heading { position: sticky; top: 2rem; text-align: left; }
    .heading :global(.section-title) { margin-inline: 0; }
    summary { padding: 1.15rem 1.35rem; font-size: 1.0625rem; }
    .answer { padding: 0 1.35rem 1.4rem; }
  }
</style>
