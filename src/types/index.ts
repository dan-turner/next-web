export type Layout = "zip-new" | "zip-legacy";
export type Locale = "en-AU" | "es-MX";

export type Config = {
  layout: Layout;
  defaultLocale: Locale;
  contentful: {
    accessToken: string;
    spaceId: string;
    environment: string;
  };
};

export const ContentType = {
  // eslint-disable-next-line i18next/no-literal-string
  json: "application/json",
};
