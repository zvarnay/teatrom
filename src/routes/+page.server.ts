import contentful from 'contentful';

const client = contentful.createClient({
    space: 'xfoszu3wzi7z',
    accessToken: '5LF_91rrSKKvjYJq9K9JJbEqjn3stDWZE4jaBo5e5QY',
});

export const load = async () => {
    const villages = await client.getEntries({
        content_type: 'village',
        include: 2,
    });

    console.log(villages.items);
    

    return {
        villages: villages.items.map((v) => v.fields),
    };
};