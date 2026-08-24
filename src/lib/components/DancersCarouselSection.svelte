<script>
  let { copy, registrationHref } = $props();

  const dancers = [
    { name: 'Tito', rating: '4.9', image: '/images/td-ia-m-04.webp' },
    { name: 'Kari', rating: '4.9', image: '/images/td-ia-f-01.webp' },
    { name: 'Luggy', rating: '4.6', image: '/images/td-ia-m-05.webp' },
    { name: 'Lu', rating: '5', image: '/images/td-ia-f-02.webp' },
    { name: 'Fran', rating: '4.8', image: '/images/td-ia-m-06.webp' },
    { name: 'More', rating: '4.9', image: '/images/td-ia-f-03.webp' },
    { name: 'Lucho', rating: '4.6', image: '/images/td-ia-m-07.webp' },
    { name: 'Vicky', rating: '4.7', image: '/images/td-ia-f-09.webp' }
  ];
</script>

<section class="section dancers" id="dancers" aria-labelledby="dancers-title">
  <div class="container heading">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title" id="dancers-title">{copy.title}</h2>
    <p class="section-intro">{copy.intro}</p>
  </div>

  <div class="carousel" aria-label={copy.carouselLabel}>
    <div class="track">
      {#each [false, true] as duplicate}
        <div class="dancer-list" aria-hidden={duplicate ? 'true' : undefined}>
          {#each dancers as dancer, index}
            <article class="dancer-card">
              <div class="photo">
                <img
                  class:flipped={index % 2 === 1}
                  src={dancer.image}
                  alt=""
                  width="180"
                  height="180"
                  loading="lazy"
                  draggable="false"
                />
                <div class="identity">
                  <h3>{dancer.name}</h3>
                  <span aria-label={`${copy.rating}: ${dancer.rating}`}>★ <strong>{dancer.rating}</strong></span>
                </div>
              </div>
            </article>
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="container actions">
    <button class="muted-cta" type="button" disabled>{copy.primaryCta}</button>
    <a href={registrationHref}>{copy.registrationCta}</a>
  </div>
</section>

<style>
  .dancers { overflow: hidden; color: var(--white); background: var(--primary-900); }
  .heading { text-align: center; }
  .heading :global(.eyebrow),
  .heading :global(.section-title),
  .heading :global(.section-intro) { margin-inline: auto; color: var(--white); }
  .heading :global(.eyebrow) { color: var(--primary-200); }
  .carousel { width: 100%; margin-top: 0; padding-block: 2.75rem; overflow: hidden; mask-image: linear-gradient(to right, var(--transparent), var(--black) 4%, var(--black) 96%, var(--transparent)); -webkit-mask-image: linear-gradient(to right, var(--transparent), var(--black) 4%, var(--black) 96%, var(--transparent)); }
  .track { display: flex; width: max-content; animation: marquee 65s linear infinite; will-change: transform; }
  .dancer-list { display: flex; gap: 2.75rem; padding-right: 2.75rem; }
  .dancer-card { position: relative; width: clamp(10.5rem, 38vw, 13rem); flex: 0 0 auto; isolation: isolate; overflow: hidden; border-radius: .85rem; outline: 1px solid var(--header-color); outline-offset: -1px; color: var(--white); background: var(--primary-700); }
  .photo { position: relative; aspect-ratio: 3 / 4; overflow: hidden; background: var(--primary-700); }
  .photo img { width: 100%; height: 100%; object-fit: cover; filter: blur(9px) saturate(.78); transform: scale(1.11); -webkit-user-drag: none; }
  .photo img.flipped { transform: scale(-1.11, 1.11); }
  .photo::after { position: absolute; z-index: 1; right: 0; bottom: 0; left: 0; height: 46%; content: ''; background: linear-gradient(var(--transparent), color-mix(in srgb, var(--primary-900) 62%, var(--transparent))); pointer-events: none; }
  .identity { position: absolute; z-index: 2; right: 1rem; bottom: 1rem; left: 1rem; text-shadow: 0 2px 10px color-mix(in srgb, var(--primary-900) 72%, var(--transparent)); }
  .identity h3 { margin: 0; color: var(--white); font-size: 1.125rem; font-weight: 600; }
  .identity span { display: block; margin-top: .2rem; color: var(--success-400); font-size: .72rem; font-weight: 700; }
  .identity strong { color: inherit; }
  .actions { display: flex; margin-top: 2.5rem; align-items: center; flex-direction: column; gap: .85rem; }
  .muted-cta { min-height: 3rem; padding: .8rem 1.25rem; border: 1px solid color-mix(in srgb, var(--white) 24%, var(--transparent)); border-radius: 999px; color: color-mix(in srgb, var(--white) 68%, var(--transparent)); background: color-mix(in srgb, var(--white) 8%, var(--transparent)); font-weight: 700; cursor: default; }
  .actions a { color: var(--primary-200); font-size: .875rem; font-weight: 600; }

  @keyframes marquee {
    to { transform: translateX(-50%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel { overflow-x: auto; }
    .track { animation: none; }
    .dancer-list[aria-hidden='true'] { display: none; }
  }
</style>
