import { HomePage, Locale, PageTranslations } from "translations/type";
import { de } from "./de";
import { en } from "./en";

const translations: PageTranslations<HomePage> = {
  en,
  de,
};

const select = (locale: Locale): HomePage => translations[locale];

export default select;
