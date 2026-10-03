import { OG_FONT_FAMILY } from './og-fonts';
import { OG_THEME } from './og-theme';
import { OG_HEIGHT, OG_WIDTH } from './seo';

export type OgCard = {
  readonly name: string;
  readonly position: string;
  readonly host?: string;
};

/** Узел дерева satori. Текст лежит в `children` как есть, экранирование не нужно. */
export type OgNode = {
  readonly type: string;
  readonly props: {
    readonly style: Readonly<Record<string, string | number>>;
    readonly children?: string | readonly OgNode[];
  };
};

const PADDING = 80;

/** Карточка 1200×630: имя, должность, внизу адрес. Чистая функция, HTML не строится. */
export const buildOgMarkup = ({ name, position, host }: OgCard): OgNode => ({
  type: 'div',
  props: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: OG_WIDTH,
      height: OG_HEIGHT,
      padding: PADDING,
      backgroundColor: OG_THEME.background,
      borderBottom: `12px solid ${OG_THEME.border}`,
      fontFamily: OG_FONT_FAMILY
    },
    children: [
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column' },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'block',
                  lineClamp: 2,
                  fontSize: 72,
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: OG_THEME.foreground
                },
                children: name
              }
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'block',
                  lineClamp: 2,
                  marginTop: 24,
                  fontSize: 36,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: OG_THEME.mutedForeground
                },
                children: position
              }
            }
          ]
        }
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            fontSize: 28,
            fontWeight: 400,
            color: OG_THEME.mutedForeground
          },
          children: host ?? ''
        }
      }
    ]
  }
});
