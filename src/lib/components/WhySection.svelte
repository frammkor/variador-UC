<script>
  let { copy, ctaHref = undefined, ctaExternal = false } = $props();
</script>

<section class="section why" id="why">
  <div class="container">
    <p class="eyebrow">{copy.eyebrow}</p>
    <h2 class="section-title">{copy.title}</h2>
    <p class="section-intro">{copy.intro}</p>

    <div class="issues">
      {#each copy.items as item}
        <section class="issue">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </section>
      {/each}
    </div>

    {#if copy.cta && ctaHref}
      <a
        class="cta"
        href={ctaHref}
        target={ctaExternal ? '_blank' : undefined}
        rel={ctaExternal ? 'noreferrer' : undefined}
      >{copy.cta}</a>
    {/if}
  </div>
</section>

<style>
  .why {
    position: relative;
    isolation: isolate;
    color: var(--text-color);
    background: var(--background-color);
  }

  .why::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    background-color: var(--primary-50);
    content: '';
    mask-image: url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E");
    mask-repeat: repeat;
  }

  .why :global(.eyebrow) {
    color: var(--primary-600);
    text-align: center;
  }

  .why :global(.section-title),
  .why :global(.section-intro) {
    margin-inline: auto;
    color: var(--text-color);
    text-align: center;
  }

  .issues {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .issue {
    display: flex;
    padding: clamp(1.25rem, 3vw, 1.75rem);
    flex-direction: column;
    gap: 0.75rem;
    border: 1px solid var(--primary-200);
    border-radius: 1rem;
    color: var(--text-color);
    background: color-mix(in srgb, var(--white) 96%, var(--transparent));
    box-shadow: 0 0.5rem 1.5rem color-mix(in srgb, var(--primary-900) 4%, var(--transparent));
  }

  h3 {
    margin: 0;
    color: var(--heading-color);
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .issue p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.2rem;
  }

  .cta {
    display: flex;
    width: fit-content;
    min-height: 3rem;
    margin: 2rem auto 0;
    padding: 0.8rem 1.25rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: var(--white);
    background: var(--primary-600);
    font-weight: 700;
    text-decoration: none;
  }

  @media (min-width: 48rem) {
    .issues {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .issue {
      min-height: 9rem;
    }
  }

  @media (min-width: 64rem) {
    .issues {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
