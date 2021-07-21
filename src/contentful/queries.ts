import { gql } from "@apollo/client";

export const getLayoutQuery = gql`
  query getLayout($slug: String!, $locale: String!) {
    layoutCollection(where: { slug: $slug }, locale: $locale) {
      items {
        slug
        brand
        logo {
          url
          width
          height
        }
        footer
      }
    }
  }
`;

export const getHomeQuery = gql`
  query getHome($locale: String!) {
    homePageCollection(locale: $locale) {
      items {
        heading
        description
        cardsCollection {
          items {
            sys {
              id
            }
            __typename
            ... on Card {
              link
              content {
                json
              }
            }
          }
        }
      }
    }
  }
`;

export const getStylishQuery = gql`
  query getStylish($locale: String!) {
    stylishPageCollection(locale: $locale) {
      items {
        title
        coolStyles
        hover
        animated
      }
    }
  }
`;
