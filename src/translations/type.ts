/* eslint-disable i18next/no-literal-string */
enum Locales {
  en = "English",
  de = "German",
}
/* eslint-enable i18next/no-literal-string */

export type Locale = keyof typeof Locales;

type Card = {
  name: string;
  description: string;
};

export type LayoutContent = {
  footer: string;
};

export type HomePage = {
  head: {
    title: string;
    description: string;
  };
  heading: string;
  description: string;
  cards: {
    styling: Card;
    documentation: Card;
    learn: Card;
    examples: Card;
    deploy: Card;
  };
};

export type StylishPage = {
  head: {
    title: string;
    description: string;
  };
  coolStyles: string;
  withHover: string;
  letsBounce: string;
  home: string;
};

export type Pages = {
  home: HomePage;
  stylish: StylishPage;
  layout: LayoutContent;
};

export type PageKeys = keyof Pages;

export type Translations = {
  [key in Locale]: Pages;
};

export type PageTranslations<TPage> = {
  [key in Locale]: TPage;
};
