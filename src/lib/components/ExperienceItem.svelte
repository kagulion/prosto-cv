<script>
  import Badge from "$lib/components/Badge.svelte";

  let { company, role, period, tags = [], highlights = [] } = $props();
</script>

<div class="mb-6 last:mb-0">
  <div class="flex justify-between items-baseline mb-0.5">
    <h3 class="font-bold text-neutral-900 text-base">{company}</h3>
    <span class="text-xs text-neutral-500 font-mono">{period}</span>
  </div>

  <p class="text-sm font-medium text-neutral-700 font-mono mb-2">{role}</p>

  {#if tags.length > 0}
    <div class="flex flex-wrap gap-1.5 mb-2.5">
      {#each tags as tag (tag)}
        <Badge label={tag} />
      {/each}
    </div>
  {/if}

  <ul
    class="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-600 leading-relaxed"
  >
    {#each highlights as item (item)}
      <li>{item}</li>
    {/each}
  </ul>
</div>
