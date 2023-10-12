// Descrito en la documentación
import SimpleLightbox from 'simplelightbox';
// Importación adicional de estilos
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createListItem(image) {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`;
}

for (const image of galleryItems) {
  const newImage = createListItem(image);
  gallery.innerHTML += newImage;
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

lightbox.on('show.simplelightbox', function (e) {
  e.preventDefault();
});

console.log(galleryItems);
