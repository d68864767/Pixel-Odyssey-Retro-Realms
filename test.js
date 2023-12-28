// test.js

const assert = require('assert');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const API_URL = 'http://localhost:' + process.env.PORT + '/api/collection';

describe('Pixel Odyssey: Retro Realms', () => {
    describe('Collection API', () => {
        it('should return an array of collection items', async () => {
            const response = await fetch(API_URL);
            const collection = await response.json();

            assert(Array.isArray(collection));
        });

        it('each collection item should have the required properties', async () => {
            const response = await fetch(API_URL);
            const collection = await response.json();

            for (const item of collection) {
                assert('name' in item);
                assert('description' in item);
                assert('image' in item);
            }
        });
    });
});
