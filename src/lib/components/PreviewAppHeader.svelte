<div class="status-bar" aria-hidden="true">
  <span>9:41</span>
  <span class="status-icons">
    <svg class="signal" viewBox="0 0 14 10">
      <rect x="0" y="6" width="2" height="4" rx="1" />
      <rect x="4" y="4" width="2" height="6" rx="1" />
      <rect x="8" y="2" width="2" height="8" rx="1" />
      <rect x="12" width="2" height="10" rx="1" />
    </svg>
    <svg class="wifi" viewBox="0 0 14 10">
      <path d="M1 3.2a9.2 9.2 0 0 1 12 0M3.3 5.7a5.7 5.7 0 0 1 7.4 0M5.7 8.1a2 2 0 0 1 2.6 0" />
    </svg>
    <svg class="battery" viewBox="0 0 20 10">
      <rect x=".75" y=".75" width="16" height="8.5" rx="2" />
      <path d="M18 3.1h1.25v3.8H18" />
      <rect class="battery-level" x="2.3" y="2.3" width="12.7" height="5.4" rx="1" />
    </svg>
  </span>
</div>

<div class="app-header">
  <span class="logo" role="img" aria-label="Dandy Dancers"></span>
  <span class="menu-placeholder" aria-hidden="true"><i></i><i></i><i></i></span>
</div>

<style>
  .status-bar { position: absolute; z-index: 1; top: 0; right: 0; left: 0; display: flex; height: 1.6rem; box-sizing: border-box; padding: .42rem 1.2rem 0; align-items: flex-start; justify-content: space-between; color: color-mix(in srgb, var(--white) 92%, var(--transparent)); background: var(--preview-header-color); font-size: .46rem; font-weight: 700; letter-spacing: -.01em; }
  .status-icons { display: flex; gap: .3rem; align-items: center; padding-top: .02rem; }
  .status-icons svg { display: block; overflow: visible; fill: currentColor; }
  .signal { width: .58rem; height: .42rem; }
  .wifi { width: .62rem; height: .44rem; fill: none !important; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; }
  .battery { width: .82rem; height: .42rem; fill: none !important; stroke: currentColor; stroke-width: 1.1; }
  .battery .battery-level { fill: currentColor; stroke: none; }
  .app-header { position: absolute; z-index: 1; top: 1.6rem; right: 0; left: 0; display: flex; height: 3.35rem; box-sizing: border-box; padding: .3rem .85rem .4rem; align-items: center; justify-content: space-between; border-bottom: 1px solid color-mix(in srgb, var(--white) 8%, var(--transparent)); background: linear-gradient(180deg, var(--preview-header-color), var(--preview-header-end-color)); }
  .logo { display: block; width: 4.15rem; aspect-ratio: 500 / 299; background: var(--asset-logo-on-dark) center / contain no-repeat; }
  .menu-placeholder { display: grid; width: 2rem; justify-items: center; gap: .22rem; }
  .menu-placeholder i { display: block; width: 1.2rem; height: 1.5px; border-radius: 999px; background: color-mix(in srgb, var(--white) 88%, var(--transparent)); }
</style>
