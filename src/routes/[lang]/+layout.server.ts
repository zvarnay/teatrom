import type { LayoutServerLoad } from './$types';
import { gql } from 'graphql-request';
import { contentfulClient } from '$lib/contentful';

export const load: LayoutServerLoad = async ({ params }) => {
  // Capture the language from the URL path
  const langCode = params.lang || 'en'; // default to 'en' if not provided

  const query = gql`
    query {
      villageCollection(limit: 10, order: date_ASC, locale: "${langCode}") {
        items {
          name
          date
          mapPosition
          mapRadius
          silhouetteImage {
            title
            url
          }
          schedule: scheduleCollection(limit: 10) {
            items {
              time
              event {
                title
                description
                image {
                  url
                }
                eventType
              }
            }
          }
        }
      }
      contentBlockCollection(limit: 50, locale: "${langCode}") {
        items {
          sys {
            id
          }
          title
          image {
            url
          }
          body {
            json
          }
          backgroundCss
          whiteText
        }
      }
    }
  `;

  const response = await contentfulClient.request(query);
  const villages = response.villageCollection.items;
  const contentBlocks = response.contentBlockCollection.items;

  contentBlocks.forEach((contentBlock) => {
    contentBlock.body = contentBlock.body.json.content;
  });

  return {
    villages,
    contentBlocks,
    langCode
  };
};