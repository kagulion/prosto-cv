<script>
  import Github from '$lib/components/icons/Github.svelte';
  import Telegram from '$lib/components/icons/Telegram.svelte';
  import { Globe, MapPin, Mail, Smartphone } from '@lucide/svelte/icons';

  let { avatar, name, title, location, contacts } = $props();
</script>

<header class="mb-8 flex items-start justify-between gap-4">
  <!-- Имя, фамилия, профессия, город -->
  <div>
    <h1 class="pb-0.5 text-3xl font-bold text-zinc-950">{name}</h1>
    <p class="pb-1 text-base leading-6 font-semibold text-zinc-950">{title}</p>
    <p class="flex items-center gap-1.5 pb-3.5 text-xs font-normal text-zinc-900">
      <span><MapPin size={14} /></span>
      {location}
    </p>

    <!-- Кнопки контактов -->
    <div class="flex items-center gap-1.5">
      {#if contacts.website}
        <a
          href={contacts.website}
          class="rounded-md border border-zinc-300 p-1.75 text-zinc-600 hover:bg-zinc-50"
          title="Вебсайт"><Globe size={16} /></a
        >
      {/if}
      {#if contacts.email}
        <a
          href={'mailto:' + contacts.email}
          class="rounded-md border border-zinc-300 p-1.75 text-zinc-600 hover:bg-zinc-50"
          title="Email"><Mail size={16} /></a
        >
      {/if}
      {#if contacts.phone}
        <a
          href={'tel:' + contacts.phone}
          class="rounded-md border border-zinc-300 p-1.75 text-zinc-600 hover:bg-zinc-50"
          title="Телефон"><Smartphone size={16} /></a
        >
      {/if}
      {#if contacts.github}
        <a
          href={contacts.github}
          class="rounded-md border border-zinc-300 p-1.75 text-zinc-600 hover:bg-zinc-50"
          title="GitHub"
        >
          <Github />
        </a>
      {/if}
      {#if contacts.telegram}
        <a
          href={contacts.telegram}
          class="rounded-md border border-zinc-300 p-1.75 text-zinc-600 hover:bg-zinc-50"
          title="Telegram"
        >
          <Telegram />
        </a>
      {/if}
    </div>
  </div>

  <!-- Аватар -->
  {#if avatar}
    <img src={avatar} alt={name} class="h-26 w-26 shrink-0 rounded-2xl bg-zinc-100 object-cover" />
  {:else}
    <div
      class="flex h-26 w-26 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-100 text-2xl text-neutral-400"
    >
      👤
    </div>
  {/if}
</header>
