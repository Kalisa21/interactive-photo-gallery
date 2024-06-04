const galleryItems = document.querySelectorAll('.gallery-item');
const imageTitle = document.querySelector('.image-title');
const imageDescription = document.querySelector('.image-description');
const imageLocation = document.querySelector('.image-location');
const details = document.querySelector('.details');

galleryItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const img = item.querySelector('img');
    imageTitle.textContent = img.alt;
    // Add logic to get description and location based on your structure

    // Show details section
    details.style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    // Hide details section
    details.style.display = 'none';
  });
});