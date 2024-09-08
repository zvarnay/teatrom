import type { PageServerLoad } from './$types';
import { contentfulClient } from '$lib/contentful';
import { villagesStore } from '$lib/contentfulStore';

export const load: PageServerLoad = async () => {
    const entries = await contentfulClient.getEntries({
        content_type: 'village',
        include: 2,
    });

    villagesStore.set(entries.items);

    return {
        villages: entries.items.map((entry) => entry.fields),
    };
};