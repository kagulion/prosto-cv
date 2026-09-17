<script>
  import Badge from '$lib/components/Badge.svelte';

  let { company, role, period, tags = [], highlights = [] } = $props();
</script>

<div class="mb-6 last:mb-0">
  <div class="mb-0.5 flex items-baseline justify-between">
    <h3 class="text-base font-bold text-neutral-900">{company}</h3>
    <span class="font-mono text-xs text-neutral-500">{period}</span>
  </div>

  <p class="mb-2 font-mono text-sm font-medium text-neutral-700">{role}</p>

  {#if tags.length > 0}
    <div class="mb-2.5 flex flex-wrap gap-1.5">
      {#each tags as tag (tag)}
        <Badge label={tag} />
      {/each}
    </div>
  {/if}

  <ul class="list-outside list-disc space-y-1 pl-4 text-xs leading-relaxed text-neutral-600">
    {#each highlights as item (item)}
      <li>{item}</li>
    {/each}
  </ul>
</div>
