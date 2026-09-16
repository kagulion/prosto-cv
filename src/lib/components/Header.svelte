<script>
  import Github from "$lib/components/icons/Github.svelte";
  import Telegram from "$lib/components/icons/Telegram.svelte";
  import { Globe, MapPin, Mail, Smartphone } from "@lucide/svelte/icons";

  let { name, title, location, contacts } = $props();
</script>

<header class="flex justify-between items-start gap-4 mb-8">
  <!-- Имя, фамилия, профессия, город -->
  <div class="space-y-1.5">
    <h1 class="text-3xl font-bold text-zinc-900 tracking-tight">{name}</h1>
    <p class="text-sm font-medium text-zinc-700 font-mono">{title}</p>
    <p class="text-xs text-zinc-500 flex items-center gap-1">
      <span><MapPin size={14}/></span>
      {location}
    </p>

    <!-- Кнопки контактов -->
    <div class="flex items-center gap-1.5 pt-2">
      {#if contacts.website}
        <a
          href={contacts.website}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="Вебсайт"><Globe size={16}/></a
        >
      {/if}
      {#if contacts.email}
        <a
          href={"mailto:" + contacts.email}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="Email"><Mail size={16}/></a
        >
      {/if}
      {#if contacts.phone}
        <a
          href={"tel:" + contacts.phone}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="Телефон"><Smartphone size={16}/></a
        >
      {/if}
      {#if contacts.github}
        <a
          href={contacts.github}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="GitHub"
        >
          <Github />
        </a>
      {/if}
      {#if contacts.telegram}
        <a
          href={contacts.telegram}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="Telegram"
        >
          <Telegram />
        </a>
      {/if}
    </div>
  </div>

  <!-- Аватар / Заглушка -->
  <div
    class="w-24 h-28 bg-zinc-100 rounded-xl flex items-center justify-center border border-zinc-300 text-zinc-400 text-3xl shrink-0"
  >
    👤
  </div>
</header>
