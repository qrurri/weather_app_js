import { eventOnElmts } from './app.js';
import { url, fetchData } from './api.js';
import * as module from './module.js';

const searchView = document.querySelector('[data-search-view]'); // 속성 요소를 선택하는 방법
const searchTogglers = document.querySelectorAll('[data-search-toggler'); // 돋보기 아이콘과 화살표 아이콘을 모두 const에 담음 -> 왜냐하면 all함수니까~

function toggleSearch() {
  searchView.classList.toggle('active');
}

eventOnElmts(searchTogglers, 'click', toggleSearch); // searchTogglers 요소를 click하면 toggleSearch라는 기능이 실행되도록 구성

// 검색어 등 입력 기능

const searchField = document.querySelector('[data-search-field]');
const searchResult = document.querySelector('[data-search-result]');

let searchTimeout = null; // let은 변수 재할당이 가능하므로 여기서 일부러 const가 아닌 let을 썼다.
const searchTimeoutDuration = 500;

searchField.addEventListener('input', function () {
  if (!searchField.value) {
    searchField.classList.remove('searching');
    searchResult.innerHTML = '';
  } else {
    searchField.classList.add('searching');
  }

  if (searchField.value) {
    searchTimeout = setTimeout(() => {
      if (!searchField.value) return;

      fetchData(url.geocode(searchField.value), function (location) {
        searchResult.innerHTML = '<ul class="view-list" data-search-list></ul>';

        /**
         * @type { Array } items : 검색 결과를 담을 배열
         */
        const items = [];

        for (let { name, lat, lon, country, state } of location) {
          const searchItem = document.createElement('li');
          searchItem.classList.add('view-item');
          searchItem.innerHTML = `
          <span class="m-icon">location_on</span>
          <div>
            <p class="item-title">${name}</p>
            <p class="label-2">${state || ''}, ${country}</p>
          </div>
          <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" data-search-toggler></a>
          `;
          searchResult
            .querySelector('[data-search-list]')
            .appendChild(searchItem);

          items.push(searchItem);
        }

        eventOnElmts(items, 'click', function () {
          toggleSearch();
        });
      });

      searchField.classList.remove('searching');
    }, searchTimeoutDuration); //위에서 searchTimeOutDuration을 500ms로 정의했으므로 그 값이 여기 들어간 거임.
  }
});
