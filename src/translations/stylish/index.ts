import { StylishPage, PageTranslations, Locale } from "../type";
import { de } from "./de";
import { en } from "./en";

const translations: PageTranslations<StylishPage> = {
  en,
  de,
};

const select = (locale: Locale): StylishPage => translations[locale];

export default select;
