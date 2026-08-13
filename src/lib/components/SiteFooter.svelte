<script>
  let { copy } = $props();
</script>

<footer>
  <div class="container">
    <p class="phrase">{copy.phrase}</p>
    <p class="name">Dandy Dancers · {copy.status}</p>
  </div>
</footer>

<style>
  footer {
    padding-block: 3rem;
    color: #ffffff;
    background: var(--color-primary-900);
  }

  .phrase {
    margin-bottom: 2rem;
    color: var(--color-primary-200);
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    line-height: 1.15;
  }

  .name {
    margin: 0;
    color: #c9becd;
    font-size: 0.75rem;
  }
</style>

