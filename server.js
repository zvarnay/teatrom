import express from 'express';
import contentful from 'contentful';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Set up Contentful client
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Serve the Svelte app
app.use(express.static('public'));

// Create a route to fetch Contentful data
app.get('/api/villages', async (req, res) => {
  try {
    const entries = await client.getEntries({
        content_type: 'village',
        include: 2,
    });
    res.json(entries.items);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});