<script>
  let { copy } = $props();
  let activeStep = $state(0);
  const dancers = [
    { name: 'Fran', age: 33, rating: '90%', price: '30', image: '/images/td-ia-06.png' },
    { name: 'Tito', age: 28, rating: '85%', price: '30', image: '/images/td-ia-04.png' },
    { name: 'Edu', age: 41, rating: '97%', price: '35', image: '/images/td-ia-05.png' }
  ];
  function nextStep() { activeStep = (activeStep + 1) % copy.steps.length; }
</script>

<div class="preview">
  <button class="phone" type="button" onclick={nextStep} aria-label={copy.nextStep}>
    <span class="speaker" aria-hidden="true"></span>
    <span class="screen">
      {#if activeStep === 0}
        <span class="stepper" aria-hidden="true"><span class="step active">1</span><span class="step-line active"></span><span class="step">2</span><span class="step-line"></span><span class="step">3</span></span>
        <span class="section-title">{copy.steps[0]}</span>
        <span class="event-card">
          <span class="event-date"><strong>24</strong><small>OCT</small></span>
          <span class="event-copy"><small>{copy.eventType}</small><strong>Nuevo Chiqué</strong><span>22:00–03:00 · Espacio Almagro</span><span class="event-meta">★ 4.8 &nbsp; · &nbsp; Buenos Aires</span></span>
          <span class="radio selected"></span>
        </span>
        <span class="event-card muted-card">
          <span class="event-date violet"><strong>25</strong><small>OCT</small></span>
          <span class="event-copy"><small>{copy.eventType}</small><strong>La Viruta</strong><span>23:30–04:00 · Palermo</span><span class="event-meta">★ 4.7 &nbsp; · &nbsp; Buenos Aires</span></span>
          <span class="radio"></span>
        </span>
        <span class="continue">{copy.continue} <span>→</span></span>
      {:else if activeStep === 1}
        <span class="stepper" aria-hidden="true"><span class="step done">✓</span><span class="step-line active"></span><span class="step active">2</span><span class="step-line"></span><span class="step">3</span></span>
        <span class="section-title">{copy.steps[1]}</span>
        <span class="dancer-list">
          {#each dancers as dancer, index}
            <span class="dancer-row">
              <span class="avatar"><img src={dancer.image} alt="" /></span>
              <span class="dancer-name"><strong>{dancer.name}</strong><small>{copy.viewProfile}</small></span>
              <span class="dancer-stats"><strong>${dancer.price}/hr</strong><small>{copy.age} {dancer.age}</small><small>{copy.reviews} {dancer.rating}</small></span>
              <span class:selected={index === 1} class="check">{index === 1 ? '✓' : ''}</span>
            </span>
          {/each}
        </span>
        <span class="pending">{copy.candidatesPending}</span>
        <span class="continue">{copy.continueWith} <span>→</span></span>
      {:else}
        <span class="success">
          <span class="success-mark">✓</span><small>DANDY DANCERS</small><strong>{copy.steps[2]}</strong>
          <span>{copy.successLead}</span>
          <span class="summary"><b>Nuevo Chiqué</b><br />24 Oct · 22:00<br />{copy.withDancer}</span>
          <span class="success-note">{copy.successNote}</span>
        </span>
      {/if}
      <span class="screen-hint">{copy.tapHint}</span>
    </span>
  </button>
  <div class="progress" aria-label={copy.progressLabel}>
    {#each copy.steps as _, index}<button type="button" class:active={index === activeStep} aria-label={`${index + 1}`} aria-current={index === activeStep ? 'step' : undefined} onclick={() => (activeStep = index)}></button>{/each}
  </div>
  <p class="label">{copy.label}</p>
</div>

<style>
  .preview { display: grid; justify-items: center; }
  .label { margin: .75rem 0 0; color: var(--color-muted); font-size: .6875rem; }
  .phone { position: relative; width: min(76vw, 18.25rem); aspect-ratio: 280 / 540; padding: 8px; overflow: hidden; border: 0; border-radius: 2.65rem; color: #1c1917; background: #1b1b1b; box-shadow: 0 1.25rem 3rem rgb(52 20 73 / 18%); cursor: pointer; font: inherit; text-align: left; }
  .phone:focus-visible { outline: 3px solid var(--color-primary); outline-offset: .35rem; }
  .speaker { position: absolute; z-index: 2; top: 17px; left: 50%; width: 4.8rem; height: .55rem; border-radius: 999px; background: #1b1b1b; transform: translateX(-50%); }
  .screen { position: relative; display: flex; width: 100%; height: 100%; box-sizing: border-box; flex-direction: column; overflow: hidden; padding: 2.65rem .85rem 1.5rem; border-radius: 2.18rem; background: #fff; }
  .stepper { display: flex; align-items: center; justify-content: center; margin: .15rem 0 1rem; }
  .step { display: grid; width: 1.45rem; height: 1.45rem; flex: 0 0 auto; place-items: center; border-radius: 50%; color: #a8a29e; background: #f3f4f6; font-size: .65rem; font-weight: 700; }
  .step.active, .step.done { color: #fff; background: #7f22fe; box-shadow: 0 2px 5px #ddd6fe; }
  .step-line { width: 2.3rem; height: 2px; background: #e7e5e4; }
  .step-line.active { background: #c084fc; }
  .section-title { margin: 0 0 .8rem; font-size: 1.12rem; font-weight: 750; letter-spacing: -.02em; }
  .event-card { display: grid; grid-template-columns: 2.7rem 1fr 1rem; gap: .65rem; align-items: center; margin-bottom: .65rem; padding: .85rem .7rem; border: 1px solid #e9d5ff; border-radius: .85rem; background: #fffafc; box-shadow: 0 3px 10px rgb(126 34 206 / 8%); }
  .muted-card { border-color: #e7e5e4; background: #fff; box-shadow: none; }
  .event-date { display: grid; height: 2.7rem; place-content: center; border-radius: .6rem; color: #fff; background: #e11d48; text-align: center; line-height: 1; }
  .event-date.violet { background: #7f22fe; }
  .event-date strong { font-size: 1rem; }
  .event-date small { margin-top: .18rem; font-size: .48rem; letter-spacing: .08em; }
  .event-copy { display: flex; min-width: 0; flex-direction: column; gap: .15rem; }
  .event-copy > small { color: #78716c; font-size: .48rem; font-weight: 700; letter-spacing: .08em; }
  .event-copy > strong { font-size: .77rem; }
  .event-copy > span { overflow: hidden; color: #57534e; font-size: .58rem; white-space: nowrap; text-overflow: ellipsis; }
  .event-copy .event-meta { color: #40ac8d; }
  .radio, .check { display: grid; width: .9rem; height: .9rem; box-sizing: border-box; place-items: center; border: 2px solid #d6d3d1; border-radius: 50%; }
  .radio.selected { border: 4px solid #7f22fe; }
  .continue { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding: .72rem .9rem; border-radius: .7rem; color: #fff; background: #7f22fe; font-size: .68rem; font-weight: 700; box-shadow: 0 5px 12px rgb(127 34 254 / 24%); }
  .dancer-list { display: flex; margin-inline: -.85rem; flex-direction: column; border-top: 1px dashed #e9d5ff; }
  .dancer-row { display: grid; grid-template-columns: 2.25rem 1fr auto 1rem; gap: .55rem; align-items: center; padding: .65rem .85rem; border-bottom: 1px solid #f5f5f4; }
  .avatar { display: block; width: 2.25rem; height: 2.25rem; overflow: hidden; border: 1px solid #d6d3d1; border-radius: 50%; background: #f5f3ff; }
  .avatar img { width: 100%; height: 100%; object-fit: cover; }
  .dancer-name, .dancer-stats { display: flex; flex-direction: column; }
  .dancer-name strong { font-size: .76rem; }
  .dancer-name small { margin-top: .18rem; color: #7f22fe; font-size: .52rem; text-decoration: underline; }
  .dancer-stats { align-items: flex-end; color: #79716b; font-size: .52rem; line-height: 1.35; }
  .dancer-stats strong { color: #1c1917; font-size: .57rem; }
  .check { border-radius: .25rem; color: #fff; font-size: .58rem; }
  .check.selected { border-color: #7f22fe; background: #7f22fe; }
  .pending { margin: .65rem 0; padding: .65rem; border: 1px dashed #d6d3d1; border-radius: .7rem; color: #a8a29e; background: #fafaf9; font-size: .55rem; text-align: center; }
  .success { display: flex; height: 100%; align-items: center; justify-content: center; flex-direction: column; text-align: center; }
  .success-mark { display: grid; width: 4rem; height: 4rem; margin-bottom: 1.2rem; place-items: center; border-radius: 50%; color: #fff; background: linear-gradient(145deg, #a855f7, #6d28d9); box-shadow: 0 8px 24px rgb(126 34 206 / 28%); font-size: 2rem; }
  .success > small { color: #7f22fe; font-size: .55rem; font-weight: 800; letter-spacing: .14em; }
  .success > strong { margin: .45rem 0; font-size: 1.35rem; letter-spacing: -.03em; }
  .success > span:not(.success-mark, .summary, .success-note) { color: #78716c; font-size: .67rem; }
  .summary { width: 100%; box-sizing: border-box; margin: 1.3rem 0 1rem; padding: .9rem; border: 1px solid #e9d5ff; border-radius: .8rem; background: #faf5ff; font-size: .63rem; line-height: 1.6; }
  .success-note { max-width: 15rem; color: #78716c; font-size: .58rem; line-height: 1.5; }
  .screen-hint { position: absolute; right: 0; bottom: .45rem; left: 0; color: #a8a29e; font-size: .47rem; text-align: center; }
  .progress { display: flex; gap: .5rem; margin-top: 1rem; }
  .progress button { width: .625rem; height: .625rem; padding: 0; border: 0; border-radius: 50%; background: var(--color-primary-200); cursor: pointer; }
  .progress button.active { background: var(--color-primary); }
</style>
