import { galleryItems } from './gallery-items.js';
// Change code below this line

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

const imageCardsContainer = document.querySelector('.gallery');
imageCardsContainer.insertAdjacentHTML('beforeend', createImageCardsMarkup(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
