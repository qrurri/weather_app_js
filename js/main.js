import { eventOnElmts } from './app.js';

const searchView = document.querySelector('[data-search-view]'); // 속성 요소를 선택하는 방법
const searchTogglers = document.querySelectorAll('[data-search-toggler'); // 돋보기 아이콘과 화살표 아이콘을 모두 const에 담음 -> 왜냐하면 all함수니까~

function toggleSearch() {
  searchView.classList.toggle('active');
}

eventOnElmts(searchTogglers, 'click', toggleSearch); // searchTogglers 요소를 click하면 toggleSearch라는 기능이 실행되도록 구성
