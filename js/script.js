const galleryItems = document.querySelectorAll('.gallery-item');
const imageTitle = document.querySelector('.image-title');
const imageDescription = document.querySelector('.image-description');
const imageLocation = document.querySelector('.image-location');
const details = document.querySelector('.details');

galleryItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const img = item.querySelector('img');
    imageTitle.textContent = img.getAttribute('data-title');
    imageDescription.textContent = img.getAttribute('data-description');
    imageLocation.textContent = img.getAttribute('data-location');
    details.style.display = 'block'; 
  });

  item.addEventListener('mouseout', () => {
    details.style.display = 'none';
  });
});