const galleryItems = document.querySelector(".gallery-items");

const photos = [
    {
        src: "images/photo1.jpg",
        title: "Photo 1",
        description: "Description of Photo 1"
    },
    // Add more photo objects here
];

photos.forEach(photo => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.title;

    const details = document.createElement("div");
    details.classList.add("gallery-details");

    const title = document.createElement("h3");
    title.textContent = photo.title;

    const description = document.createElement("p");
    description.textContent = photo.description;

    details.appendChild(title);
    details.appendChild(description);

    galleryItem.appendChild(img);
    galleryItem.appendChild(details);

    galleryItems.appendChild(galleryItem);
});