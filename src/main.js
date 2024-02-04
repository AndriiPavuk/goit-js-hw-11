import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/fetch.js';
import createsStringOfPageElements from './js/template-page.js';

const galleryRef = document.querySelector('.gallery');
const moreButtonRef = document.querySelector('.more');
const formRef = document.querySelector('.form');
const loaderRef = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

let searchValue = '';
let page = 1;

formRef.addEventListener('submit', loadFirstPageOfGallery);
moreButtonRef.addEventListener('click', loadOtherGalleryPages);

loaderRef.hidden = true;

function loadFirstPageOfGallery(e) {
  e.preventDefault();
  searchValue = e.currentTarget.elements.query.value.trim();

  if (searchValue === '') {
    showErrorMessage('Enter anything in the search field!');
    return;
  }

  resetGallery();

  fetchAndDisplayImages();
}

function loadOtherGalleryPages(e) {
  e.preventDefault();
  fetchAndDisplayImages();
}

function resetGallery() {
  page = 1;
  moreButtonRef.disabled = false;
  moreButtonRef.textContent = 'More';
  moreButtonRef.hidden = true;
  loaderRef.hidden = false;
  galleryRef.innerHTML = '';
}

function showErrorMessage(message) {
  iziToast.error({
    position: 'topRight',
    messageColor: 'brown',
    message,
    timeout: 3000,
  });
}

function fetchAndDisplayImages() {
  fetchImages(page, searchValue)
    .then(response => {
      handleImageResponse(response);
    })
    .catch(error => console.error(error))
    .finally(() => {
      loaderRef.hidden = true;
    });
}

function handleImageResponse(response) {
  if (response.hits.length === 0) {
    showErrorMessage(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  page += 1;
  galleryRef.insertAdjacentHTML(
    'beforeend',
    createsStringOfPageElements(response.hits)
  );
  lightbox.refresh();

  if (response.hits.length === 40) moreButtonRef.hidden = false;
  if (response.hits.length < 40) {
    moreButtonRef.hidden = false;
    moreButtonRef.disabled = true;
    moreButtonRef.textContent = 'Images are over';
  }
}

function resetForm() {
  formRef.reset();
}
