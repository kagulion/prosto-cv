import avatarImg from '$lib/assets/avatar.png'
import faviconImg from '$lib/assets/favicon.svg'

export const resumeData = {
  avatar: avatarImg,
  favicon: faviconImg,
  name: 'Матеуш Роньский',
  title: 'Senior Frontend Developer / Инженер-программист',
  location: 'Санкт-Петербург, Россия',
  contacts: {
    website: 'https://example.com',
    email: 'mateusz@example.com',
    phone: '+7 999 000-00-00',
    github: 'https://github.com/mateusz',
    telegram: 'https://t.me/mateusz',
  },
  about: [
    'Инженер-программист с 7+ годами опыта в коммерческой Frontend-разработке. Специализируюсь на создании высокопроизводительных SPA/SSG приложений, архитектуре клиентской части и минималистичном инструментарии.',
    'Приверженец подхода «Clean Code & Zero Overengineering» — предпочитаю предсказуемый и легкий код сложным абстракциям.',
  ],
  experience: [
    {
      company: 'FinTech Solution Studio',
      role: 'Senior Frontend Developer / UI Architect',
      period: '2025–настоящее время',
      tags: ['AI', 'React', 'Next.js', 'TypeScript', 'AdonisJS'],
      highlights: [
        'Проектирование и разработка клиентской части высоконагруженного аналитического дашборда.',
        'Перевод ключевых интерфейсных модулей на Svelte 5 (Runes) и Vite.',
      ],
    },
    {
      company: 'EPAM Systems',
      role: 'Middle Frontend Developer',
      period: '2021–2025',
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      highlights: [
        'Разработка клиентских сервисов для международного E-commerce клиента.',
        'Оптимизация производительности DOM-дерева и бандлов.',
      ],
    },
  ],
  skills: [
    'React/Next.js',
    'TypeScript',
    'Node.js',
    'AI/LLMs',
    'Tailwind CSS',
    'Design Systems',
    'WebRTC',
    'WebSockets',
  ],
  projects: [
    {
      title: 'Monitor',
      description: 'Автономный ИИ-агент для контроля качества веб-приложений',
      tags: ['TypeScript', 'Next.js', 'AI', 'Browser Extension'],
    },
    {
      title: 'Framerz',
      description: 'Студия по созданию изображений и видео с ИИ',
      tags: ['TypeScript', 'Next.js', 'AI', 'Browser Extension'],
    },
    {
      title: 'InstaCV',
      description:
        'Шаблон резюме с открытым исходным кодом, оптимизированный для печати',
      tags: ['TypeScript', 'Next.js', 'AI', 'Browser Extension'],
    },
  ],
}
