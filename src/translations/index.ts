import { useRouter } from "next/router";
import { Locale } from "./type";

export const useLocale = (): Locale => {
  const router = useRouter();

  return router.locale as Locale;
};
