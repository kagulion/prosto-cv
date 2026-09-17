<script>
  let { data } = $props();
  let resumeData = $derived(data.resume);

  import Header from '$lib/components/Header.svelte';
  import Badge from '$lib/components/Badge.svelte';
  import Section from '$lib/components/Section.svelte';
  import ExperienceItem from '$lib/components/ExperienceItem.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  let selectedTag = $state(null);

  function toggleTag(tag) {
    selectedTag = selectedTag === tag ? null : tag;
  }

  let filteredExperience = $derived(
    selectedTag
      ? resumeData.experience.filter((job) => job.tags?.includes(selectedTag))
      : resumeData.experience
  );
  let filteredProjects = $derived(
    selectedTag
      ? resumeData.projects.filter((p) => p.tags?.includes(selectedTag))
      : resumeData.projects
  );
</script>

<main class="mx-auto max-w-2xl px-4 py-10 font-sans text-neutral-900 sm:px-6">
  <!-- Кнопка печати -->
  <div class="mb-6 flex justify-end print:hidden">
    <button
      type="button"
      onclick={() => window.print()}
      class="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-50"
      >🖨️ Экспорт в PDF / Печать</button
    >
  </div>

  <!-- Шапка -->
  <Header {...resumeData} />

  <!-- Обо мне -->
  <Section title="Обо мне">
    <div class="space-y-3 text-sm leading-relaxed text-neutral-600">
      {#each resumeData.about as paragraph, i (i)}
        <p>{paragraph}</p>
      {/each}
    </div>
  </Section>

  <!-- Навыки -->
  <Section title="Навыки">
    <div class="flex flex-wrap items-center gap-1.5">
      {#each resumeData.skills as skill (skill)}
        <button
          type="button"
          onclick={() => toggleTag(skill)}
          class="cursor-pointer transition-opacity hover:opacity-80"
        >
          <Badge label={skill} active={selectedTag === skill} />
        </button>
      {/each}

      <!-- Кнопка сброса -->
      {#if selectedTag}
        <button
          onclick={() => (selectedTag = null)}
          class="ml-2 cursor-pointer text-xs text-neutral-500 underline hover:text-neutral-800"
        >
          Сбросить фильтр ✕
        </button>
      {/if}
    </div>
  </Section>
  <!-- Опыт работы -->
  <Section title="Опыт работы">
    {#if filteredExperience.length === 0}
      <p class="text-xs text-neutral-400 italic">Нет совпадений для выбранного навыка.</p>
    {:else}
      {#each filteredExperience as job (job.company)}
        <ExperienceItem {...job} />
      {/each}
    {/if}
  </Section>
  <!-- Пет-проекты -->
  <Section title="Пет-проекты">
    {#if filteredProjects.length === 0}
      <p class="text-xs text-neutral-400 italic">Нет совпадений для выбранного навыка.</p>
    {:else}
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {#each filteredProjects as project (project.title)}
          <ProjectCard {...project} />
        {/each}
      </div>
    {/if}
  </Section>
  <!-- Футер -->
  <footer class="pt-8 pb-4 text-center text-xs font-bold tracking-wider text-neutral-800">
    InstaCV
  </footer>
</main>
