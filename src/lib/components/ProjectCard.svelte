<script>
  import { ExternalLink } from '@lucide/svelte/icons';
  import Badge from '$lib/components/Badge.svelte';

  let { title, description, tags = [], url } = $props();
</script>

<div class="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-3.5">
  <div>
    {#if url}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        class="group mb-1 inline-flex items-center gap-1 text-sm font-bold text-neutral-900 transition-colors hover:text-neutral-600"
      >
        {title}
        <ExternalLink size={12} class="opacity-50 transition-opacity group-hover:opacity-100" />
      </a>
    {:else}
      <h3 class="mb-1 text-sm font-bold text-neutral-900">{title}</h3>
    {/if}
    <p class="mb-3 text-xs leading-normal text-neutral-600">
      {description}
    </p>
  </div>

  <!-- Лейблы -->
  <div class="flex flex-wrap gap-1">
    {#each tags as tag (tag)}
      <Badge label={tag} />
    {/each}
  </div>
</div>
