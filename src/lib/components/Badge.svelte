<script>
  let { label = "", variant = "neutral", active = false } = $props();
</script>

<span
  class="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono transition-colors border
  {active
    ? 'bg-neutral-900 text-white border-neutral-900'
    : 'bg-neutral-100 text-neutral-800 border-neutral-200'}"
>
  {label}
</span>
