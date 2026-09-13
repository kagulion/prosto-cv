<script>
  import { resumeData } from "$lib/assets/data";

  import Header from "$lib/components/Header.svelte";
  import Badge from "$lib/components/Badge.svelte";
  import Section from "$lib/components/Section.svelte";
  import ExperienceItem from "$lib/components/ExperienceItem.svelte";
</script>

<Header {...resumeData} />

<Section title="Обо мне">
  <div class="space-y-3 text-sm text-neutral-600 leading-relaxed">
    {#each resumeData.about as paragraph, i (i)}
      <p>{paragraph}</p>
    {/each}
  </div>
</Section>

<Section title="Опыт работы">
  {#each resumeData.experience as job (job.company)}
    <ExperienceItem {...job} />
  {/each}
</Section>

<Section title="Навыки">
  <div class="flex flex-wrap gap-1.5">
    {#each resumeData.skills as skill (skill)}
      <Badge label={skill} />
    {/each}
  </div>
</Section>
