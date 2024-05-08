import { url, fetchData } from './api.js'; // ./api.js로 경로를 명확히 알려줘야 거기서 import를 해 온다.

/**
 *
 * @param {NodeList} elmts selected elements from html to add events // NodeList : html에 있는 각각의 노드 요소들을 저장하라는 뜻.
 * @param {string} event event type e.g. 'click', 'mouseenter'
 * @param {function} callback callback function to be executed when event is triggered
 */

export function eventOnElmts(elmts, event, callback) {
  for (const elmt of elmts) {
    elmt.addEventListener(event, callback);
  }
} // 여기까지 함수를 정의한거고 이제 이 함수를 작동시켜보자. main.js에서...

console.log(url);
