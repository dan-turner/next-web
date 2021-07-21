import config from "../../config";
import { getStylishQuery } from "../queries";
import { client, ContentNotFoundError } from "../client";
import { GetStylishQuery, GetStylishQueryVariables } from "../types";

export type StylishPageContent = {
  title: string;
  coolStyles: string;
  hover: string;
  animated: string;
};

export const getStylish = async (
  locale: string | undefined
): Promise<StylishPageContent> => {
  const { data } = await client.query<
    GetStylishQuery,
    GetStylishQueryVariables
  >({
    query: getStylishQuery,
    variables: {
      locale: locale ?? config.defaultLocale,
    },
  });
  if (
    !data.stylishPageCollection ||
    data.stylishPageCollection.items.length === 0 ||
    !data.stylishPageCollection.items[0]
  ) {
    throw new Error(ContentNotFoundError);
  }
  return data.stylishPageCollection.items[0] as StylishPageContent;
};
