<script>
  import './layout.css';
  let { children, data } = $props();
  let resumeData = $derived(data?.resume);
</script>

<svelte:head>
  {#if resumeData?.name}
    <title>{resumeData.name} — Резюме</title>
  {/if}
  {#if resumeData?.favicon}
    <link rel="icon" href={resumeData.favicon} />
  {/if}
</svelte:head>
{@render children()}
