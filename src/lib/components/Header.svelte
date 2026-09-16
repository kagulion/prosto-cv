<script>
  import Github from "$lib/components/icons/Github.svelte";
  import Telegram from "$lib/components/icons/Telegram.svelte";
  import { Globe, MapPin, Mail, Smartphone } from "@lucide/svelte/icons";

  let { avatar, name, title, location, contacts } = $props();
</script>

<header class="flex justify-between items-start gap-4 mb-8">
  <!-- Имя, фамилия, профессия, город -->
  <div>
    <h1 class="text-3xl font-bold text-zinc-950 pb-0.5">{name}</h1>
    <p class="text-base font-semibold leading-6 text-zinc-950 pb-1">{title}</p>
    <p
      class="text-xs font-normal text-zinc-900 flex items-center gap-1.5 pb-3.5"
    >
      <span><MapPin size={14} /></span>
      {location}
    </p>

    <!-- Кнопки контактов -->
    <div class="flex items-center gap-1.5">
      {#if contacts.website}
        <a
          href={contacts.website}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="Вебсайт"><Globe size={16} /></a
        >
      {/if}
      {#if contacts.email}
        <a
          href={"mailto:" + contacts.email}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="Email"><Mail size={16} /></a
        >
      {/if}
      {#if contacts.phone}
        <a
          href={"tel:" + contacts.phone}
          class="p-1.75 rounded-md border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
          title="Телефон"><Smartphone size={16} /></a
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

  <!-- Аватар -->
  {#if avatar}
    <img
      src={avatar}
      alt={name}
      class="w-26 h-26 bg-zinc-100 rounded-2xl shrink-0 object-cover"
    />
  {:else}
    <div
      class="w-26 h-26 bg-neutral-100 rounded-2xl flex items-center justify-center border border-neutral-200 text-neutral-400 text-2xl shrink-0"
    >
      👤
    </div>
  {/if}
</header>
