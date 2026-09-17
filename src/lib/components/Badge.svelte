<script>
  let { label = '', variant = 'neutral', active = false } = $props();
</script>

<span
  class="inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs transition-colors
  {active
    ? 'border-neutral-900 bg-neutral-900 text-white'
    : 'border-neutral-200 bg-neutral-100 text-neutral-800'}"
>
  {label}
</span>
