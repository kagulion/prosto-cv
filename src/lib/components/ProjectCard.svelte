<script>
  import Badge from "$lib/components/Badge.svelte";

  let { title, description, tags = [] } = $props();
</script>

<div
  class="border border-neutral-200 rounded-lg p-3.5 flex flex-col justify-between bg-white"
>
  <div>
    <h3 class="font-bold text-sm text-neutral-900 mb-1">{title}</h3>
    <p class="text-xs text-neutral-600 leading-normal mb-3">
      {description}
    </p>
  </div>

  <div class="flex flex-wrap gap-1">
    {#each tags as tag (tag)}
      <Badge label={tag} />
    {/each}
  </div>
</div>
