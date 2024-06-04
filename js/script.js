const galleryItems = document.querySelectorAll('.gallery-item');
const imageTitle = document.querySelector('.image-title');
const imageDescription = document.querySelector('.image-description');
const imageLocation = document.querySelector('.image-location');
const details = document.querySelector('.details');

// Sample image data (replace with your actual data)
const imageData = [
    { title: "Fennec Fox", description: "A small desert fox with large ears.", location: "Sahara Desert" },
    { title: "Humpback Whale", description: "A large baleen whale known for its songs.", location: "All oceans" },
    { title: "Common Brown Baboon", description: "A large monkey found in Africa.", location: "Savanna" },
    { title: "Spotted Deer", description: "A deer with white spots.", location: "Forests" }
];

galleryItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        const img = item.querySelector('img');
        imageTitle.textContent = img.alt; 
        imageDescription.textContent = imageData[index].description;
        imageLocation.textContent = imageData[index].location;
        details.style.display = 'block'; // Show details section
    });

    item.addEventListener('mouseout', () => {
        details.style.display = 'none'; // Hide details section
    });
});