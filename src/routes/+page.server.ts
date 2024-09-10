import type { PageServerLoad } from './$types';
import { gql } from 'graphql-request';
import { contentfulClient } from '$lib/contentful';
import { villagesStore } from '$lib/contentfulStore';

export const load: PageServerLoad = async () => {
    const query = gql`
        query {
            villageCollection(limit: 10, order: date_ASC) {
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
        }
    `;
    
    const response = await contentfulClient.request(query);
    const villages = response.villageCollection.items;
    villagesStore.set(villages);

    return {
        villages,
    };
};