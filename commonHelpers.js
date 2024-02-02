import{S as v,i as d}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const b="25810966-6fb22a4db6c9a757ebd742847",L="https://pixabay.com/api/";function g(i,e){return fetch(`${L}?key=${b}&q=${e}&page=${i}&per_page=40&image_type=photo&orientation=horizontal`).then(o=>o.json())}function m(i){return i.map(({largeImageURL:e,webformatURL:o,tags:c,likes:t,views:s,comments:r,downloads:y})=>`<li class="gallery-item">
              <a href="${e}"
                  class="link-img">
                  <img
                      src="${o}"
                      alt="${c}">
              </a>
              <ul class="list-info">
                  <li class="list-info-item">
                      <svg class="info-icon">
                          <use href="./img/sprite.svg#icon-like-svgrepo-com"></use>
                      </svg>
                      <!-- <p class="list-info-name">Likes:</p> -->
                      <p class="list-info-value">${t}</p>
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
                      <p class="list-info-value">${y}</p>
                  </li>
              </ul>
          </li>`).join("")}const f=document.querySelector(".gallery"),n=document.querySelector(".more"),h=document.querySelector(".form"),a=document.querySelector(".loader");h.addEventListener("submit",$);n.addEventListener("click",S);a.hidden=!0;const p=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});let u="",l=0;function $(i){if(i.preventDefault(),i.currentTarget.elements.query.value.trim()===""){d.error({position:"topRight",messageColor:"brown",message:"Enter anything in the search field!",timeout:3e3});return}u=i.currentTarget.elements.query.value,l=1,n.disabled=!1,n.textContent="More",n.hidden=!0,a.hidden=!1,f.innerHTML="",g(l,u).then(e=>{if(e.hits.length===0){d.error({position:"topRight",messageColor:"brown",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3});return}l+=1,f.insertAdjacentHTML("beforeend",m(e.hits)),p.refresh(),e.hits.length===40&&(n.hidden=!1)}).catch(e=>console.log(e)).finally(()=>{a.hidden=!0}),h.reset()}function S(i){i.preventDefault(),n.hidden=!0,a.hidden=!1,g(l,u).then(e=>{l+=1,f.insertAdjacentHTML("beforeend",m(e.hits)),p.refresh(),e.hits.length===40&&(n.hidden=!1),e.hits.length<40&&(n.hidden=!1,n.disabled=!0,n.textContent="Images are over")}).catch(e=>console.log(e)).finally(()=>{a.hidden=!0})}
//# sourceMappingURL=commonHelpers.js.map
