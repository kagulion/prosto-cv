import { defineCV } from '../config/define';

const LONG_URL =
  'https://example.com/workspaces/acme/projects/q3-launch/docs/9f8e7d6c5b4a?tab=comments&filter=unresolved';

/**
 * Худший реалистичный CV: каждое поле на пределе или без значения, как это бывает у живых людей.
 * Только для dev: подставляется вместо `cv.config.ts` по `?data=worst`, в сборку не попадает.
 */
export const worstCase = defineCV({
  lang: 'ru',
  name: 'Александра Вишневская-Ковальчик-Монтгомери',
  position:
    'Старший инженер-разработчик интерфейсов, платформенная инфраструктура и дизайн-система',

  seo: { url: 'https://example.com', description: 'Проверка худшего случая' },

  contacts: {
    phone: '+7 (812) 999-99-99',
    email: 'bartholomew.fitzgerald@northwind-industries-holdings.example.com',
    // Пределы из `contacts.ts`: Telegram 32, GitHub 39, LinkedIn 100 символов.
    telegram: 't.me/' + 'a_very_long_telegram_name_32_chr'.slice(0, 32),
    github: 'github.com/' + 'a-github-login-that-is-exactly-39-chrs'.slice(0, 39),
    linkedin:
      'linkedin.com/in/' + 'aleksandra-wisniewska-kowalczyk-montgomery-'.repeat(3).slice(0, 100),
    location: 'Санкт-Петербург, Всеволожский район, Ленинградская область'
  },

  about:
    'Фронтенд-инженер с девятью годами опыта: от лендингов в студии до платформенной команды, ' +
    'которая обслуживает сорок продуктовых команд и дизайн-систему на 120 компонентов. ' +
    'Отвечаю за производительность, доступность и инструменты сборки.\n\n' +
    'Веду внутренние курсы, выступаю на конференциях, пишу в блог. Ищу роль, где можно ' +
    'совмещать архитектуру интерфейсов с наставничеством, а не только закрывать тикеты. '.repeat(3),

  experience: [
    {
      position:
        'Ведущий инженер-разработчик платформы клиентских интерфейсов, Platform Infrastructure',
      company: 'Акционерное общество «Северные промышленные технологии и холдинговые решения»',
      period: 'сентябрь 2019 — декабрь 2025, по совместительству',
      bullets: [
        'Спроектировала микрофронтенд-архитектуру на Module Federation для сорока команд, сократила время релиза с трёх дней до двух часов и убрала ручную координацию между командами',
        `Описала процесс миграции в RFC: ${LONG_URL}`,
        'Ревью ' + 'очень-длинного-слова-без-пробелов-'.repeat(4),
        'Короткий пункт',
        '<b>Разметка</b> &amp; **markdown** должны выводиться как обычный текст',
        'Пункт с переносом\nстроки внутри',
        'Менторила 12 инженеров, шестеро выросли до middle',
        'Внедрила визуальные регрессионные тесты',
        'Настроила бюджеты производительности в CI',
        'Перевела дизайн-систему на токены и тёмную тему',
        'Провела аудит доступности по WCAG AA',
        'Написала внутренний курс по React Server Components'
      ]
    },
    { position: 'Dev', company: 'Я', period: '2024', bullets: ['Один пункт'] },
    {
      position: 'Фронтенд-разработчик',
      company: 'ООО «Техносфера»',
      period: 'н. в.'
    },
    ...Array.from({ length: 5 }, (_, i) => ({
      position: `Фронтенд-разработчик, проект ${i + 1}`,
      company: 'ООО «Техносфера»',
      period: `${2012 + i} — ${2013 + i}`,
      bullets: ['Верстка и поддержка']
    }))
  ],

  projects: [
    {
      name: 'Kubernetes-operator-для-мультитенантной-платформы-аналитики-реального-времени',
      url: LONG_URL,
      description:
        'Оператор, который разворачивает изолированные окружения аналитики для каждого клиента, следит за квотами, ' +
        'ротацией секретов и миграциями схем без простоя. Используется в продакшене с 2022 года, покрыт интеграционными тестами.',
      tech: [
        'React',
        'TypeScript',
        'Redux Toolkit',
        'Tailwind',
        'Vite',
        'Playwright',
        'Storybook',
        'GraphQL',
        'PostgreSQL',
        'Kubernetes',
        'Terraform',
        'OpenTelemetry',
        'customer-feedback-from-enterprise-onboarding'
      ]
    },
    { name: 'Я' },
    { name: 'Без описания и ссылки', tech: ['Go'] },
    { name: 'Только ссылка', url: 'https://example.com/a' },
    {
      name: 'Проект с описанием',
      description: 'Короткое описание',
      tech: ['Astro', 'TypeScript']
    }
  ],

  skills: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Redux Toolkit',
    'Zustand',
    'Next.js',
    'Tailwind CSS',
    'HTML5',
    'CSS3/SCSS',
    'Go',
    'Rust',
    'adaptivnaya-i-krossbrauzernaya-verstka-s-uchetom-assistivnykh-tekhnologiy-i-pechati',
    ...Array.from({ length: 40 }, (_, i) => `Навык ${i + 1}`)
  ],

  education: [
    {
      institution:
        'Федеральное государственное автономное образовательное учреждение высшего образования «Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики»',
      degree: 'магистр',
      field: 'Программная инженерия распределённых информационных систем',
      period: 'сентябрь 2015 — июнь 2017'
    },
    { institution: 'МГУ' },
    { institution: 'Колледж', degree: 'диплом', period: '2012' }
  ],

  certificates: [
    {
      title: 'Профессиональная сертификация: архитектор интерфейсов уровня Expert, версия 2',
      issuer: 'Международная ассоциация веб-стандартов',
      year: 2025
    },
    { title: 'AWS', year: 1999 },
    { title: 'Без года и издателя' }
  ],

  achievements: [
    `Победитель хакатона, описание: ${LONG_URL}`,
    { text: 'Статья с ссылкой в тексте', url: LONG_URL },
    '<script>alert(1)</script> &amp; **bold**',
    'Короткое'
  ],

  publications: [
    { text: 'Как мы ускорили загрузку SPA на 35 процентов и не сломали кеш', url: LONG_URL },
    'Доклад без ссылки'
  ],

  openSource: [
    'Несколько PR в документацию и баг-фиксы в популярных UI-библиотеках',
    { text: 'react-tiny-hooks', url: 'https://github.com/example/react-tiny-hooks' }
  ],

  languages: [
    {
      name: 'Китайский (путунхуа)',
      level: 'HSK 4, свободно читаю техническую документацию',
      note: 'жила в Шэньчжэне три года, веду рабочие созвоны, пишу код-ревью на китайском'
    },
    { name: 'Русский' },
    { name: 'Английский', level: 'C1' }
  ],

  tools: Array.from({ length: 30 }, (_, i) => `Инструмент ${i + 1}`),

  volunteering:
    'Наставник в программе бесплатных курсов по веб-разработке для школьников и взрослых, переучивающихся в IT (2018 — н. в.)\n\n' +
    'Организатор ежегодной конференции для начинающих разработчиков в Санкт-Петербурге.',

  interests:
    'Велопрогулки, настольные игры, чтение научпопа, дизайн интерфейсов, ' +
    'ориентирование на местности, керамика, шахматы, домашняя фотолаборатория.',

  recommendations: [
    {
      quote:
        'Александра быстро вникает в задачу и всегда доводит её до конца. С ней удобно работать над сложными интерфейсами. '.repeat(
          6
        ),
      author: 'Christopher Alexander Montgomery III',
      role: 'Senior Product Design Engineer, Platform Infrastructure',
      company: 'Northwind Industries Holdings International'
    },
    { quote: 'Да', author: 'Jo' }
  ],

  availability: {
    format:
      'удалённо из любой точки мира, гибрид в Санкт-Петербурге или Москве, командировки до 20 процентов времени',
    employment: 'полная занятость или проектная работа',
    salary: 'от 12 345 678,90 ₽ в месяц до вычета налогов, обсуждается',
    start: 'через две недели после подписания оффера'
  },

  labels: {
    sections: {
      experience: {
        title: 'Профессиональный опыт и значимые достижения за последние девять лет',
        nav: 'Профессиональный опыт'
      },
      certificates: { title: 'Сертификаты, лицензии и подтверждённые квалификации' },
      availability: { title: 'Условия, формат работы и готовность к выходу' }
    },
    availability: {
      format: 'Предпочтительный формат работы',
      employment: 'Тип занятости и режим',
      salary: 'Ожидаемый уровень дохода',
      start: 'Возможная дата выхода'
    }
  },

  footer: { logo: true, credit: 'Сделано с помощью prosto-cv, генератора резюме из одного конфига' }
});

/** Минимум, который принимает схема: имя, должность и один контакт. Страница без секций. */
export const minimalCase = defineCV({
  name: 'Jo',
  position: 'Dev',
  about: 'Пишу код.',
  contacts: { email: 'a@b.co' },
  footer: { logo: false }
});
