/** Адрес для печати: без протокола, `www.` и хвостового `/`. Вход должен быть проверенной ссылкой. */
export const displayUrl = (url: string): string =>
  url
    .replace(/^[a-z][a-z0-9+.-]*:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/\/+$/, '');
