const KEY_API = '25810966-6fb22a4db6c9a757ebd742847';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages(page, searchValue) {
  return fetch(
    `${BASE_URL}?key=${KEY_API}&q=${searchValue}&page=${page}&per_page=40&image_type=photo&orientation=horizontal`
  ).then(r => r.json());
}