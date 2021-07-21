import { Document } from "@contentful/rich-text-types";
import config from "../../config";
import { getHomeQuery } from "../queries";
import { client, ContentNotFoundError } from "../client";
import { GetHomeQuery, GetHomeQueryVariables } from "../types";

export type Card = {
  link: string | undefined;
  content: Document;
};

export type HomePageContent = {
  heading: string;
  description: string;
  cards: Card[];
};

export const getHome = async (
  locale: string | undefined
): Promise<HomePageContent> => {
  const { data } = await client.query<GetHomeQuery, GetHomeQueryVariables>({
    query: getHomeQuery,
    variables: {
      locale: locale ?? config.defaultLocale,
    },
  });
  if (
    !data.homePageCollection ||
    data.homePageCollection.items.length === 0 ||
    !data.homePageCollection.items[0]
  ) {
    throw new Error(ContentNotFoundError);
  }
  const { cardsCollection, ...home } = data.homePageCollection.items[0];
  return {
    ...home,
    cards: cardsCollection
      ? cardsCollection.items.map((x): Card | undefined => {
          if (!x || x.__typename !== "Card" || !x.content) {
            return undefined;
          }
          return {
            link: x.link ? x.link : undefined,
            content: x.content.json as Document,
          };
        })
      : [],
  } as HomePageContent;
};
