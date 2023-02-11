import { galleryItems } from './gallery-items.js';

// створення розмітки
function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}

// Відображення розмітки в браузері
const imageCardsContainer = document.querySelector('.gallery');
imageCardsContainer.insertAdjacentHTML('beforeend', createImageCardsMarkup(galleryItems));

// логіка модального вікна
imageCardsContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  // скидання поведінки браузера за замовчуванням
  event.preventDefault();

  // перевірка чи клік відбувається по таргету
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  // Створення базової розмітки та відкриття модалки
  const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);
  instance.show();

  // Заміна значення атрибута src елемента <img> в модальному вікні
  const lightboxImage = document.querySelector('[src="assets/images/image.png"]');
  lightboxImage.src = event.target.dataset.source;

  // Закриття модалки по кнопці escape
  window.addEventListener('keydown', onEscapePress);

  function onEscapePress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
