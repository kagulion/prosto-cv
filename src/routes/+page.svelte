<script>
  import Header from '$lib/components/Header.svelte'
  import { resumeData } from '$lib/assets/data';
  import Badge from '$lib/components/Badge.svelte';
</script>

<Header {...resumeData}/>
<Badge label='React' />
