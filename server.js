// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Assuming that we have a collection of NFTs stored in a JSON file
const collection = require('./collection.json');

// API endpoint to get the NFT collection data
app.get('/api/collection', (req, res) => {
    res.json(collection);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
