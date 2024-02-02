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

formRef.addEventListener('submit', loadsFirstPageOfGallery);
moreButtonRef.addEventListener('click', loadsOtherGalleryPages);

loaderRef.hidden = true;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

let searchValue = '';
let page = 0;

function loadsFirstPageOfGallery(e) {
  e.preventDefault();
  if (e.currentTarget.elements.query.value.trim() === '') {
    iziToast.error({
      position: 'topRight',
      messageColor: 'brown',
      message: 'Enter anything in the search field!',
      timeout: 3000,
    });
    return;
  }

  searchValue = e.currentTarget.elements.query.value;
  page = 1;
  moreButtonRef.disabled = false;
  moreButtonRef.textContent = 'More';
  moreButtonRef.hidden = true;
  loaderRef.hidden = false;
  galleryRef.innerHTML = '';

  fetchImages(page, searchValue)
    .then(r => {
      if (r.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          messageColor: 'brown',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 3000,
        });

        return;
      }

      page += 1;

      galleryRef.insertAdjacentHTML(
        'beforeend',
        createsStringOfPageElements(r.hits)
      );

      lightbox.refresh();

      if (r.hits.length === 40) moreButtonRef.hidden = false;
    })
    .catch(err => console.log(err))
    .finally(() => {
      loaderRef.hidden = true;
    });

  formRef.reset();
}

function loadsOtherGalleryPages(e) {
  e.preventDefault();

  moreButtonRef.hidden = true;
  loaderRef.hidden = false;

  fetchImages(page, searchValue)
    .then(r => {
      page += 1;

      galleryRef.insertAdjacentHTML(
        'beforeend',
        createsStringOfPageElements(r.hits)
      );

      lightbox.refresh();

      if (r.hits.length === 40) moreButtonRef.hidden = false;
      if (r.hits.length < 40) {
        moreButtonRef.hidden = false;
        moreButtonRef.disabled = true;

        moreButtonRef.textContent = 'Images are over';
      }
    })
    .catch(err => console.log(err))
    .finally(() => {
      loaderRef.hidden = true;
    });
}