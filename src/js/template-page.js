export default function createsStringOfPageElements(arrayOfObjects) {
    return arrayOfObjects
      .map(
        ({
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<li class="gallery-item">
              <a href="${largeImageURL}"
                  class="link-img">
                  <img
                      src="${webformatURL}"
                      alt="${tags}">
              </a>
              <ul class="list-info">
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-like-svgrepo-com"></use>
                      </svg>
                      <!-- <p class="list-info-name">Likes:</p> -->
                      <p class="list-info-value">${likes}</p>
                  </li>
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-eye"></use>
                      </svg>
                      <!-- <p class="list-info-name">Views:</p> -->
                      <p class="list-info-value">${views}</p>
                  </li>
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-bubble2"></use>
                      </svg>
                      <!-- <p class="list-info-name">Comments:</p> -->
                      <p class="list-info-value">${comments}</p>
                  </li>
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-cloud-download"></use>
                      </svg>
                      <!-- <p class="list-info-name">Downloads:</p> -->
                      <p class="list-info-value">${downloads}</p>
                  </li>
              </ul>
          </li>`;
        }
      )
      .join('');
  }