<script>
  let { title, children } = $props();
</script>

<section class="mb-8">
  <h2 class="mb-3 text-xl font-bold tracking-tight text-neutral-900">{title}</h2>

  {@render children?.()}
</section>
