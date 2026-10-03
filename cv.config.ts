import { defineCV } from './src/config/define';

/**
 * Единственный файл, который нужно править. Здесь лежит пример на вымышленных данных:
 * замените их своими. Любую необязательную секцию можно удалить, тогда её не будет
 * на странице. Подробности в README.md.
 */
export default defineCV({
  lang: 'ru',
  name: 'Иван Иванов',
  position: 'Фронтенд-разработчик',

  seo: {
    url: 'https://ivanov-dev.example.com',
    description: 'Фронтенд-разработчик: React, TypeScript, доступные и быстрые интерфейсы'
  },

  contacts: {
    phone: '+7 999 999-99-99',
    email: 'devivanov@mail.ru',
    telegram: 't.me/ivanov_dev',
    github: 'github.com/ivanov-dev',
    linkedin: 'linkedin.com/in/ivanov-dev',
    location: 'Москва'
  },

  about:
    'Фронтенд-разработчик с 3,5 годами опыта. Делаю SPA и корпоративные веб-приложения на React и TypeScript. ' +
    'Внимателен к производительности, доступности и аккуратной вёрстке. Люблю превращать макеты в ' +
    'поддерживаемые интерфейсы и работать в тесной связке с дизайнерами и бэкенд-командой.',

  experience: [
    {
      position: 'Фронтенд-разработчик',
      company: 'ООО «Техносфера»',
      period: 'июнь 2024 — н. в.',
      bullets: [
        'Разрабатываю личный кабинет клиентов на React + TypeScript',
        'Сократил время первой загрузки на 35% (code splitting, lazy loading, оптимизация изображений)',
        'Внедрил дизайн-систему на Tailwind, ускорив вёрстку новых страниц',
        'Провожу code review и менторю двух джунов'
      ]
    },
    {
      position: 'Junior фронтенд-разработчик',
      company: '«ВебСтудия Пиксель»',
      period: 'март 2023 — май 2024',
      bullets: [
        'Верстал адаптивные сайты и лендинги для клиентов',
        'Подключал REST API и настраивал сборку на Vite',
        'Покрыл тестами ключевые компоненты (Jest + Testing Library)'
      ]
    }
  ],

  projects: [
    {
      name: 'Личный кабинет «Техносфера»',
      description: 'клиентский портал',
      tech: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind']
    },
    {
      name: 'Трекер задач',
      tag: 'pet-проект',
      description: 'канбан-доска с drag-and-drop',
      tech: ['React', 'Zustand', 'Vite']
    },
    {
      name: 'Генератор CV',
      url: 'https://example.com/prosto-cv',
      description: 'одностраничный сайт-резюме из конфига',
      tech: ['Astro', 'TypeScript', 'Tailwind']
    }
  ],

  skills: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Redux Toolkit',
    'Zustand',
    'Next.js (база)',
    'Tailwind CSS',
    'HTML5',
    'CSS3/SCSS',
    'REST',
    'GraphQL (база)',
    'Jest',
    'Testing Library',
    'адаптивная и кроссбраузерная вёрстка'
  ],

  education: [
    {
      institution: 'Московский технический университет',
      degree: 'бакалавр',
      field: 'Прикладная информатика',
      period: '2018–2022'
    }
  ],

  certificates: [
    { title: 'Профессия Фронтенд-разработчик', issuer: 'онлайн-школа', year: 2022 },
    { title: 'Advanced React', issuer: 'онлайн-курс', year: 2024 },
    { title: 'Web Accessibility Fundamentals', year: 2025 }
  ],

  achievements: [
    'Призёр внутреннего хакатона «Техносферы» (2025)',
    'Снижение LCP с 4,2 с до 2,1 с на главной странице продукта',
    'Благодарность от команды за внедрение дизайн-системы'
  ],

  publications: [
    {
      text: 'Статья «Как мы ускорили загрузку SPA на 35%», блог на Habr (2025)',
      url: 'https://habr.com/ru/users/ivanov-dev/'
    },
    'Доклад «Tailwind в продакшене: плюсы и подводные камни», внутренний митап (2025)'
  ],

  openSource: [
    'Несколько PR в документацию и баг-фиксы в популярных UI-библиотеках',
    {
      text: 'Собственная библиотека хуков react-tiny-hooks (около 200 звёзд на GitHub)',
      url: 'https://github.com/ivanov-dev/react-tiny-hooks'
    }
  ],

  languages: [
    { name: 'Русский', level: 'родной' },
    { name: 'Английский', level: 'B2', note: 'чтение документации, переписка, code review' }
  ],

  tools: [
    'Git',
    'GitHub Actions',
    'Vite',
    'Webpack',
    'ESLint',
    'Prettier',
    'Figma',
    'Storybook',
    'Chrome DevTools',
    'Lighthouse',
    'Jira',
    'VS Code',
    'Windows 10'
  ],

  volunteering:
    'Наставник в программе бесплатных курсов по веб-разработке для школьников (2024 — н. в.)',

  interests: 'Велопрогулки, настольные игры, чтение научпопа, дизайн интерфейсов',

  recommendations: [
    {
      quote:
        'Иван быстро вникает в задачу и всегда доводит её до конца. С ним удобно работать над сложными интерфейсами',
      author: 'Анна Смирнова',
      role: 'Lead Designer',
      company: 'Техносфера'
    },
    {
      quote: 'Надёжный разработчик, хорошо объясняет технические решения',
      author: 'Дмитрий Орлов',
      role: 'Tech Lead',
      company: 'Техносфера'
    }
  ],

  availability: {
    format: 'удалёнка или гибрид',
    employment: 'полная',
    salary: 'от 200 000 ₽',
    start: 'через 2 недели'
  },

  labels: {
    sections: {
      experience: { title: 'Опыт работы', nav: 'Опыт' }
    },
    pdfButton: 'Скачать резюме' // false убирает кнопку
  },

  footer: { show: true }
});
