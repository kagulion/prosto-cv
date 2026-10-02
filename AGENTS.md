# ProstoCV

Одностраничный сайт резюме для программистов: пользователь заполняет один конфиг, страница собирается сама, одинаково хорошо выглядит в браузере и в печати (PDF).

## Stack

- **Language / Runtime**: TypeScript 6 (`astro/tsconfigs/strict`), Node, ES modules
- **Framework**: Astro 7, статическая сборка, язык страницы `ru`
- **Key dependencies**: Tailwind 4 (через `@tailwindcss/vite`), `@lucide/astro` (иконки), шрифты Geist и Geist Mono (`@fontsource-variable`), `satori`, `satori-html`, `@resvg/resvg-js` (OG картинка на сборке)
- **Package manager**: pnpm 11 (закреплён в `devEngines`)
- **Quality tools**: ESLint 10 (`typescript-eslint`, `eslint-plugin-astro`), Prettier (плагины Astro и Tailwind)

## Build approach

**Tracer Bullet**: сначала тонкая рабочая нитка через все слои (конфиг, загрузка, страница, одна живая секция), потом нитка утолщается секция за секцией.

## Commands

```bash
# Install
pnpm install

# Dev server (127.0.0.1:4321)
pnpm dev

# Build / preview
pnpm build
pnpm preview

# Typecheck, lint, format
pnpm check
pnpm lint
pnpm format:check   # pnpm format чинит

# Test
# раннер ещё не настроен, его добавит /test
```

## Specs

Stored in `docs/specs/`. Format: `docs/specs/NNNN-title.md`. Скоуп живёт в `docs/scope/scope.md`. Папка `docs/` в `.gitignore`, в git не попадает.

## Rules

- Архитектура функциональная: чистые функции и неизменяемые данные. Загрузка и проверка конфига, подготовка данных секций это функции без побочных эффектов, Astro компоненты только рисуют.
- Побочные эффекты (чтение файлов, сеть, генерация OG картинки) живут на краях и явно видны.
- Модульные переменные только константы. Не мутировать данные на месте, использовать `const` и `readonly`.
- Ожидаемые сбои (неверный конфиг) возвращаются явным результатом или типизированной ошибкой, а не случайным исключением. Одна общая схема ошибок конфига: понятное сообщение с именем поля, ошибка на сборке.
- Типы строгие: без `any`, без обхода `strict`.
- Главное правило продукта: секция рисуется только из конфига. Нет данных или пусто, секции нет в разметке (без заглушек и пустых заголовков). Тексты интерфейса тоже берутся из конфига.
- Структура папок как в каркасе Astro (`src/pages`, `src/styles`), новые папки добавляются по мере нужды без заранее выбранной схемы.
- Доступность на уровне WCAG AA: семантическая разметка, контраст, alt тексты, понятные ссылки.
- Сообщения коммитов по Conventional Commits (`feat:`, `fix:`, `chore:`, `style:`, `build:`).
- Стили через токены из `src/styles/global.css` (цвета, радиусы, тёмный вариант `.dark`), без жёстко заданных значений.

## Tooling

Выбрано, ставит `/develop tooling`, этот файл только записывает решение.

- Линтер и форматтер: ESLint и Prettier, уже установлены, скрипты `lint`, `format`, `format:check` есть.
- Проверки перед коммитом: lint, format:check и typecheck (`pnpm check`). Хук ещё не установлен.
- Тесты: unit тесты на чистую логику (схема конфига, загрузка, отбор пустых секций) плюс `/check verify` на живом приложении для вёрстки. Раннер выберет `/test`.
- CI: пока нет.

## Git

- integration: off

## Agent skills

Declined: Agent Skills и MCP серверы для стека (Astro, Tailwind, Lucide, satori), не предлагать повторно.

## Context files

<!-- Nested AGENTS.md files are listed here as they are created -->

_Drafted by /audit from the repo, worth a quick human pass. Edit freely: once a line stops matching this draft, later runs treat it as curated and will flag rather than overwrite it._
