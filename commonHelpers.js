import{S as g,i as m}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="25810966-6fb22a4db6c9a757ebd742847",d="https://pixabay.com/api/";function h(t,i){const o=new URLSearchParams({key:p,q:i,page:t,per_page:40,image_type:"photo",orientation:"horizontal"}),n=`${d}?${o.toString()}`;return fetch(n).then(e=>e.json())}function y(t){return t.map(({largeImageURL:i,webformatURL:o,tags:n,likes:e,views:s,comments:r,downloads:f})=>`<li class="gallery-item">
              <a href="${i}"
                  class="link-img">
                  <img
                      src="${o}"
                      alt="${n}">
              </a>
              <ul class="list-info">
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-like-svgrepo-com"></use>
                      </svg>
                      <!-- <p class="list-info-name">Likes:</p> -->
                      <p class="list-info-value">${e}</p>
                  </li>
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-eye"></use>
                      </svg>
                      <!-- <p class="list-info-name">Views:</p> -->
                      <p class="list-info-value">${s}</p>
                  </li>
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-bubble2"></use>
                      </svg>
                      <!-- <p class="list-info-name">Comments:</p> -->
                      <p class="list-info-value">${r}</p>
                  </li>
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-cloud-download"></use>
                      </svg>
                      <!-- <p class="list-info-name">Downloads:</p> -->
                      <p class="list-info-value">${f}</p>
                  </li>
              </ul>
          </li>`).join("")}const c=document.querySelector(".gallery"),l=document.querySelector(".form"),a=document.querySelector(".loader"),v=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});l.addEventListener("submit",b);a.hidden=!0;l.dataset.page="1";function b(t){if(t.preventDefault(),t.currentTarget.elements.query.value.trim()===""){u("Enter anything in the search field!");return}L()}function L(){a.hidden=!1,c.innerHTML="",l.dataset.page="1",S()}function u(t){m.error({position:"topRight",messageColor:"brown",message:t,timeout:3e3})}function S(){const t=parseInt(l.dataset.page,10);h(t,l.elements.query.value.trim()).then(i=>{$(i)}).catch(i=>console.error(i)).finally(()=>{a.hidden=!0})}function $(t){if(t.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}c.insertAdjacentHTML("beforeend",y(t.hits)),v.refresh()}
//# sourceMappingURL=commonHelpers.js.map
