import { LayoutContent, Locale, PageTranslations } from "translations/type";
import { de } from "./de";
import { en } from "./en";

const translations: PageTranslations<LayoutContent> = {
  en,
  de,
};

const select = (locale: Locale): LayoutContent => translations[locale];

export default select;
