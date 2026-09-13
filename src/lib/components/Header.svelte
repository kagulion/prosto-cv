<script>
  let { name, title, location, contacts } = $props();
</script>

<header class="flex justify-between items-start gap-4 mb-8">
  <!-- Имя, фамилия, профессия, город -->
  <div class="space-y-1.5">
    <h1 class="text-3xl font-bold text-neutral-900 tracking-tight">{name}</h1>
    <p class="text-sm font-medium text-neutral-700 font-mono">{title}</p>
    <p class="text-xs text-neutral-500 flex items-center gap-1">
      <span>📍</span> {location}
    </p>

    <!-- Кнопки контактов -->
    <div class="flex items-center gap-2 pt-2">
      {#if contacts.website}
        <a href={contacts.website} class="p-1.5 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50" title="Website">🌐</a>
      {/if}
      {#if contacts.email}
        <a href={"mailto:" + contacts.email} class="p-1.5 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50" title="Email">✉️</a>
      {/if}
      {#if contacts.github}
        <a href={contacts.github} class="p-1.5 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50" title="GitHub">🐙</a>
      {/if}
      {#if contacts.telegram}
        <a href={contacts.telegram} class="p-1.5 rounded-md border border-neutral-200 text-neutral-600 hover:bg-neutral-50" title="Telegram">✈️</a>
      {/if}
    </div>
  </div>

  <!-- Аватар / Заглушка -->
  <div class="w-24 h-28 bg-neutral-100 rounded-xl flex items-center justify-center border border-neutral-200 text-neutral-400 text-3xl shrink-0">
    👤
  </div>
</header>
