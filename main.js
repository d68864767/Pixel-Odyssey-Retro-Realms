// main.js

// Assuming that we have a server-side API that returns the NFT collection data
const API_URL = '/api/collection';

// Function to create a collection item element
function createCollectionItemElement(item) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('collection-item');

    const imgElement = document.createElement('img');
    imgElement.src = item.image;
    imgElement.alt = item.name;

    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;

    itemElement.appendChild(imgElement);
    itemElement.appendChild(nameElement);
    itemElement.appendChild(descriptionElement);

    return itemElement;
}

// Function to fetch the collection data and populate the collection grid
async function populateCollectionGrid() {
    const collectionGrid = document.getElementById('collection-grid');

    try {
        const response = await fetch(API_URL);
        const collection = await response.json();

        for (const item of collection) {
            const itemElement = createCollectionItemElement(item);
            collectionGrid.appendChild(itemElement);
        }
    } catch (error) {
        console.error('Failed to fetch collection data:', error);
    }
}

// Populate the collection grid when the page loads
window.addEventListener('DOMContentLoaded', populateCollectionGrid);
