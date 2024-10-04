import type { LayoutServerLoad } from './$types';
import { gql } from 'graphql-request';
import { contentfulClient } from '$lib/contentful';
import { language } from '$lib/contentfulStore';

export const load: LayoutServerLoad = async ({ params }) => {
  // Capture the language from the URL path
  const availableLocales = ['en', 'hu'];
  const langCode = availableLocales.includes(params.lang) ? params.lang : 'en';

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
          floatedImage
        }
      }
      yearGalleryCollection(limit: 10) {
        items {
          year
          imagesCollection(limit: 10) {
            items {
              title
              url
            }
          }
        }
      }
      pressMentionCollection(limit: 10, locale: "${langCode}") {
        items {
          title
          link
          medium
          publicationYear
          image {
            url
          }
        }
      }
    }
  `;

  const response = await contentfulClient.request(query);
  const villages = response.villageCollection.items;
  const contentBlocks = response.contentBlockCollection.items;
  const yearGalleries = response.yearGalleryCollection.items
  const pressMentions = response.pressMentionCollection.items;

  contentBlocks.forEach((contentBlock) => {
    contentBlock.body = contentBlock.body.json.content;
  });

  return {
    villages,
    contentBlocks,
    yearGalleries,
    pressMentions,
    langCode
  };
};