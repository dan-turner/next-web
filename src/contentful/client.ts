import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";
import { ContentType } from "../types";
import config from "../config";

const { accessToken, spaceId, environment } = config.contentful;

export const ContentNotFoundError = "Content not found";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`,
    headers: {
      "Content-Type": ContentType.json,
      Authorization: `Bearer ${accessToken}`,
    },
    fetch,
  }),
  cache: new InMemoryCache(),
});
