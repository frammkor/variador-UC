<script>
  import PreviewAppHeader from './PreviewAppHeader.svelte';

  let { copy, activeStep = $bindable(0) } = $props();
  const searches = [
    { dayGroup: 0, day: '24', month: 'OCT', time: '21:30', duration: 2, hourlyRate: 30, venue: 'Salón Canning', location: 'Palermo', peopleCount: 1, rating: '4.9', image: '/images/cu-ia-01.webp' },
    { dayGroup: 0, day: '24', month: 'OCT', time: '22:00', duration: 3, hourlyRate: 30, venue: 'Salón Canning', location: 'Palermo', peopleCount: 2, rating: '4.8', image: '/images/cu-ia-02.webp' },
    { dayGroup: 1, day: '25', month: 'OCT', time: '20:30', duration: 2, hourlyRate: 30, venue: 'El Beso', location: 'Balvanera', peopleCount: 1, rating: '4.7', image: '/images/cu-ia-04.webp' },
    { dayGroup: 1, day: '25', month: 'OCT', time: '23:30', duration: 2, hourlyRate: 30, venue: 'La Viruta', location: 'Palermo', peopleCount: 1, rating: '5.0', image: '/images/cu-ia-03.webp' },
    { dayGroup: 2, day: '26', month: 'OCT', time: '22:30', duration: 3, hourlyRate: 30, venue: 'Marabú', location: 'San Nicolás', peopleCount: 2, rating: '4.9', image: '/images/cu-ia-05.webp' }
  ];
  const search = searches[1];
  let pointerStartX = 0;
  let didSwipe = false;

  function nextStep() {
    activeStep = Math.min(activeStep + 1, copy.steps.length - 1);
  }

  function previousStep() {
    activeStep = Math.max(activeStep - 1, 0);
  }

  /** @param {PointerEvent} event */
  function handlePointerDown(event) {
    didSwipe = false;
    pointerStartX = event.clientX;
    const phone = /** @type {HTMLDivElement} */ (event.currentTarget);
    phone.setPointerCapture(event.pointerId);
  }

  /** @param {PointerEvent} event */
  function handlePointerUp(event) {
    const distance = event.clientX - pointerStartX;
    const phone = /** @type {HTMLDivElement} */ (event.currentTarget);
    phone.releasePointerCapture(event.pointerId);
    if (Math.abs(distance) < 35) return;

    didSwipe = true;
    if (distance < 0) nextStep();
    else previousStep();
  }

  function handleClick() {
    if (didSwipe) {
      didSwipe = false;
      return;
    }
    nextStep();
  }

  /** @param {KeyboardEvent} event */
  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      nextStep();
    }
  }
</script>

<div class="preview">
  <div
    class="phone"
    onclick={handleClick}
    onkeydown={handleKeydown}
    onpointerdown={handlePointerDown}
    onpointerup={handlePointerUp}
    role="button"
    tabindex="0"
    aria-label={copy.progressLabel}
  >
    <span class="speaker" aria-hidden="true"></span>
    <div class="screen">
      <PreviewAppHeader />

      {#if activeStep === 0}
        <h3>{copy.steps[0]}</h3>
        <div class="search-list" aria-label={copy.availableSearches}>
          {#each copy.days as day, dayIndex}
            <h4>{day}</h4>
            {#each searches as option}
              {#if option.dayGroup === dayIndex}
                <div class="search-card">
                  <span class="profile-avatar-wrap">
                    <span class="profile-avatar"><img src={option.image} alt="" width="320" height="320" loading="lazy" draggable="false" /></span>
                  </span>
                  <span class="search-copy"><small>{option.time}</small><strong>{option.venue}</strong><span>{option.location} · {option.peopleCount} {option.peopleCount === 1 ? copy.person : copy.people}</span></span>
                </div>
              {/if}
            {/each}
          {/each}
        </div>
      {:else if activeStep === 1}
        <h3>{copy.steps[1]}</h3>
        <div class="detail-card">
          <div class="profile-heading">
            <span class="profile-avatar-wrap">
              <span class="profile-avatar"><img src={search.image} alt={copy.profile.name} width="320" height="320" loading="lazy" draggable="false" /></span>
            </span>
            <span class="profile-name"><strong>{copy.profile.name}</strong><small>{search.peopleCount} {search.peopleCount === 1 ? copy.person : copy.people}</small></span>
            <span class="profile-rating">★ {search.rating}</span>
          </div>

          <div class="profile-summary">
            <strong>{copy.profile.level} · {copy.profile.nationality}</strong>
            <span>{copy.profile.role} · {copy.dancingSince} {copy.profile.since}</span>
            <span>{copy.favoriteOrchestra}: {copy.profile.orchestra}</span>
            <p>{copy.profile.bio}</p>
          </div>

          <dl>
            <div><dt>{copy.date}</dt><dd>{search.day} {search.month}</dd></div>
            <div><dt>{copy.meetingTime}</dt><dd>{search.time}</dd></div>
            <div><dt>{copy.duration}</dt><dd>{search.duration} h</dd></div>
            <div><dt>{copy.milonga}</dt><dd>{search.venue}</dd></div>
          </dl>

          <div class="payment-summary">
            <span><small>{copy.paymentTotal}</small><strong>US$ {search.hourlyRate * search.duration}</strong></span>
            <small>US$ {search.hourlyRate} {copy.perHour} × {search.duration} h</small>
          </div>
        </div>
        <span class="continue">{copy.apply} <span>→</span></span>
      {:else}
        <div class="success">
          <span class="success-mark">✓</span>
          <small>DANDY DANCERS</small>
          <strong>{copy.steps[2]}</strong>
          <span>{copy.successLead}</span>
          <span class="summary"><b>{search.venue}</b><br />{search.day} {search.month} · {search.time}</span>
          <span class="success-note">{copy.successNote}</span>
        </div>
      {/if}

      <span class="screen-hint">{copy.tapHint}</span>
    </div>
  </div>

  <div class="progress" aria-label={copy.progressLabel}>
    {#each copy.steps as _, index}<button type="button" class:active={index === activeStep} aria-label={`${index + 1}`} aria-current={index === activeStep ? 'step' : undefined} onclick={() => (activeStep = index)}></button>{/each}
  </div>
  <p class="label">{copy.label}</p>
</div>

<style>
  .preview { display: grid; justify-items: center; }
  .label { margin: .75rem 0 0; color: var(--muted-color); font-size: .6875rem; }
  .phone { position: relative; display: block; width: min(82vw, 17rem, 39svh); aspect-ratio: 1 / 2; padding: 8px; overflow: hidden; border-radius: 2.65rem; color: var(--gray-800); background: var(--gray-900); box-shadow: 0 1.25rem 3rem color-mix(in srgb, var(--primary-500) 18%, var(--transparent)); cursor: pointer; text-align: left; touch-action: pan-y; user-select: none; -webkit-user-select: none; }
  .phone:focus-visible { outline: 3px solid var(--primary-500); outline-offset: .35rem; }
  .speaker { position: absolute; z-index: 3; top: 17px; left: 50%; width: 4.8rem; height: .55rem; border-radius: 999px; background: var(--gray-900); transform: translateX(-50%); }
  .screen { position: relative; display: flex; width: 100%; height: 100%; box-sizing: border-box; flex-direction: column; overflow: hidden; padding: 5.7rem .85rem 1.5rem; border-radius: 2.18rem; background: var(--white); }
  h3 { margin: 0 0 .8rem; color: var(--gray-800); font-size: 1.12rem; font-weight: 750; letter-spacing: -.02em; }
  .search-list { display: flex; min-height: 0; padding-right: .15rem; flex: 1; flex-direction: column; gap: .4rem; overflow-y: auto; scrollbar-width: none; }
  .search-list::-webkit-scrollbar { display: none; }
  h4 { margin: .2rem 0 0; color: var(--gray-500); font-size: .58rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  .search-card { display: grid; grid-template-columns: 3rem 1fr; gap: .65rem; align-items: center; padding: .5rem .6rem; border: 1px solid var(--gray-200); border-radius: .8rem; background: var(--white); }
  .profile-avatar-wrap { display: flex; width: 3rem; align-items: center; }
  .profile-avatar { display: block; width: 3rem; height: 3rem; flex: 0 0 auto; overflow: hidden; border: 2px solid var(--white); border-radius: .65rem; background: var(--warm-surface); box-shadow: 0 0 0 1px var(--gray-300); }
  .profile-avatar img { width: 100%; height: 100%; object-fit: cover; -webkit-user-drag: none; }
  .search-copy { display: flex; min-width: 0; flex-direction: column; gap: .15rem; }
  .search-copy small { color: var(--gray-500); font-size: .5rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .search-copy strong { font-size: .77rem; }
  .search-copy span { color: var(--gray-600); font-size: .58rem; }
  .detail-card { display: grid; min-height: 0; gap: .65rem; padding: .8rem; overflow-y: auto; border: 1px solid var(--primary-200); border-radius: .9rem; background: color-mix(in srgb, var(--primary-500) 5%, var(--white)); box-shadow: 0 3px 10px color-mix(in srgb, var(--primary-500) 8%, var(--transparent)); scrollbar-width: none; }
  .detail-card::-webkit-scrollbar { display: none; }
  .profile-heading { display: grid; grid-template-columns: 3rem 1fr auto; gap: .65rem; align-items: center; }
  .profile-name { display: flex; min-width: 0; flex-direction: column; }
  .profile-name strong { overflow: hidden; font-size: .75rem; white-space: nowrap; text-overflow: ellipsis; }
  .profile-name small { color: var(--gray-500); font-size: .52rem; }
  .profile-rating { color: var(--success-600); font-size: .62rem; font-weight: 800; }
  .profile-summary { display: flex; padding-top: .55rem; flex-direction: column; gap: .15rem; border-top: 1px solid var(--primary-200); font-size: .55rem; line-height: 1.35; }
  .profile-summary > span { color: var(--gray-600); }
  .profile-summary p { margin: .25rem 0 0; color: var(--gray-500); }
  dl { display: grid; grid-template-columns: 1fr 1fr; gap: .4rem; margin: 0; }
  dl div { display: flex; padding: .4rem; flex-direction: column; border-radius: .45rem; background: color-mix(in srgb, var(--white) 72%, var(--transparent)); font-size: .55rem; }
  dt { color: var(--gray-500); }
  dd { margin: 0; color: var(--gray-700); font-weight: 700; }
  .payment-summary { display: flex; padding: .55rem .65rem; align-items: center; justify-content: space-between; gap: .5rem; border: 1px solid var(--primary-200); border-radius: .6rem; background: var(--white); }
  .payment-summary > span { display: flex; flex-direction: column; }
  .payment-summary small { color: var(--gray-500); font-size: .5rem; line-height: 1.3; }
  .payment-summary strong { color: var(--primary-500); font-size: .88rem; line-height: 1.15; }
  .continue { display: flex; width: 100%; flex: 0 0 auto; box-sizing: border-box; align-items: center; justify-content: space-between; margin-top: auto; padding: .72rem .9rem; border-radius: .7rem; color: var(--white); background: var(--primary-500); font-size: .68rem; font-weight: 700; box-shadow: 0 5px 12px color-mix(in srgb, var(--primary-500) 24%, var(--transparent)); }
  .success { display: flex; height: 100%; align-items: center; justify-content: center; flex-direction: column; text-align: center; }
  .success-mark { display: grid; width: 4rem; height: 4rem; margin-bottom: 1.2rem; place-items: center; border-radius: 50%; color: var(--white); background: linear-gradient(145deg, var(--primary-500), var(--primary-800)); box-shadow: 0 8px 24px color-mix(in srgb, var(--primary-500) 28%, var(--transparent)); font-size: 2rem; }
  .success > small { color: var(--primary-500); font-size: .55rem; font-weight: 800; letter-spacing: .14em; }
  .success > strong { margin: .45rem 0; font-size: 1.35rem; letter-spacing: -.03em; }
  .success > span:not(.success-mark, .summary, .success-note) { color: var(--gray-500); font-size: .67rem; }
  .summary { width: 100%; box-sizing: border-box; margin: 1.3rem 0 1rem; padding: .9rem; border: 1px solid var(--primary-200); border-radius: .8rem; background: var(--primary-surface); font-size: .63rem; line-height: 1.6; }
  .success-note { max-width: 15rem; color: var(--gray-500); font-size: .58rem; line-height: 1.5; }
  .screen-hint { position: absolute; right: 0; bottom: .45rem; left: 0; color: var(--gray-400); font-size: .47rem; text-align: center; }
  .progress { display: flex; gap: .5rem; margin-top: 1rem; }
  .progress button { width: .625rem; height: .625rem; padding: 0; border: 0; border-radius: 50%; background: var(--primary-200); cursor: pointer; }
  .progress button.active { background: var(--primary-500); }

  @media (min-width: 48rem) {
    .phone { width: 18.25rem; aspect-ratio: 280 / 590; }
  }
</style>
