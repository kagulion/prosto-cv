<script>
  let { title, children } = $props();
</script>

<section class="mb-8">
  <h2 class="text-xl font-bold text-neutral-900 mb-3 tracking-tight">{title}</h2>

  {@render children?.()}
</section>
