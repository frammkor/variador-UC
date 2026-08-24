<script>
  let { copy, ctaLabel, ctaHref } = $props();

  const testimonials = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
  ];
</script>

<section class="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
  <div class="container heading">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title" id="testimonials-title">
      {copy.titleStart} <span>{copy.titleHighlight}</span>
    </h2>
  </div>

  <div class="carousel" aria-label={copy.carouselLabel}>
    <div class="track">
      {#each [false, true] as duplicate}
        <div class="testimonial-list" aria-hidden={duplicate ? 'true' : undefined}>
          {#each testimonials as testimonial}
            <blockquote class="testimonial-card">
              <span class="quote-mark" aria-hidden="true">“</span>
              <p>{testimonial}</p>
              <div class="testimonial-meta">{copy.placeholderLabel}</div>
            </blockquote>
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="container actions">
    <a class="cta" href={ctaHref} target="_blank" rel="noreferrer">{ctaLabel}</a>
  </div>
</section>

<style>
  .testimonials {
    overflow: hidden;
    background: var(--testimonials-background);
  }

  .heading {
    text-align: center;
  }

  .heading :global(.eyebrow),
  .heading :global(.section-title) {
    margin-inline: auto;
  }

  .heading :global(.section-title) {
    max-width: 18ch;
    font-size: clamp(2.5rem, 8vw, 5.5rem);
    line-height: 1;
    letter-spacing: -.045em;
  }

  .heading :global(.section-title span) {
    color: var(--primary-600);
  }

  .carousel {
    width: 100%;
    margin: clamp(2.5rem, 7vw, 5rem) auto 0;
    padding-block: 1rem;
    overflow: hidden;
    mask-image: linear-gradient(to right, var(--transparent), var(--black) 4%, var(--black) 96%, var(--transparent));
    -webkit-mask-image: linear-gradient(to right, var(--transparent), var(--black) 4%, var(--black) 96%, var(--transparent));
  }

  .track { display: flex; width: max-content; animation: marquee 65s linear infinite; will-change: transform; }
  .testimonial-list { display: flex; gap: 1.5rem; padding-right: 1.5rem; }

  .testimonial-card {
    position: relative;
    display: flex;
    min-height: 18rem;
    margin: 0;
    padding: 2rem;
    box-sizing: border-box;
    flex: 0 0 min(84vw, 24rem);
    flex-direction: column;
    border: 1px solid var(--primary-100);
    border-radius: 1rem;
    background: var(--white);
  }

  .quote-mark {
    height: 2.5rem;
    color: var(--primary-200);
    font-family: Georgia, serif;
    font-size: 4.5rem;
    line-height: .9;
  }

  .testimonial-card p {
    margin: 1.25rem 0 2rem;
    color: var(--body-color);
    font-size: 1rem;
    line-height: 1.35;
  }

  .testimonial-meta {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid var(--primary-100);
    color: var(--muted-color);
    font-size: .72rem;
    font-weight: 700;
    letter-spacing: .06em;
    text-transform: uppercase;
  }

  .actions { display: flex; justify-content: center; }
  .cta {
    display: flex;
    width: fit-content;
    min-height: 3rem;
    margin-top: 2rem;
    padding: .8rem 1.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: var(--white);
    background: var(--primary-600);
    font-weight: 700;
    text-decoration: none;
  }

  @keyframes marquee {
    to { transform: translateX(-50%); }
  }

  @media (min-width: 48rem) {
    .heading {
      text-align: left;
    }

    .heading :global(.eyebrow),
    .heading :global(.section-title) {
      margin-inline: 0;
    }

    .testimonial-card {
      flex-basis: min(38vw, 28rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel { overflow-x: auto; }
    .track { animation: none; }
    .testimonial-list[aria-hidden='true'] { display: none; }
  }
</style>
