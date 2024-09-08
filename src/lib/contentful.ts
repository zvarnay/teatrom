import contentful from 'contentful';

const client = contentful.createClient({
    space: 'xfoszu3wzi7z',
    accessToken: '5LF_91rrSKKvjYJq9K9JJbEqjn3stDWZE4jaBo5e5QY'
});

/* client.getEntries({
    content_type: 'village',
    include: 2,
}).then((response) => {
    console.log(response.items);
}); */

export default client;