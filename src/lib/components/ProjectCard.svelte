<script>
  import Badge from '$lib/components/Badge.svelte';

  let { title, description, tags = [] } = $props();
</script>

<div class="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-3.5">
  <div>
    <h3 class="mb-1 text-sm font-bold text-neutral-900">{title}</h3>
    <p class="mb-3 text-xs leading-normal text-neutral-600">
      {description}
    </p>
  </div>

  <div class="flex flex-wrap gap-1">
    {#each tags as tag (tag)}
      <Badge label={tag} />
    {/each}
  </div>
</div>
