import config from "../../config";
import { getLayoutQuery } from "../queries";
import { client, ContentNotFoundError } from "../client";
import { GetLayoutQuery, GetLayoutQueryVariables } from "../types";

export type LayoutContent = {
  slug: string;
  brand: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  footer: string;
};

export const getLayout = async (
  locale: string | undefined,
  slug: string
): Promise<LayoutContent> => {
  const { data } = await client.query<GetLayoutQuery, GetLayoutQueryVariables>({
    query: getLayoutQuery,
    variables: {
      locale: locale ?? config.defaultLocale,
      slug,
    },
  });
  if (
    !data.layoutCollection ||
    data.layoutCollection.items.length === 0 ||
    !data.layoutCollection.items[0]
  ) {
    throw new Error(ContentNotFoundError);
  }
  return data.layoutCollection.items[0] as LayoutContent;
};
