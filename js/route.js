import { updateWeather } from './main.js';

const defaultLocation = '#/weather?lat=37.55529&lon=126.9199'; //봄아카데미 위치

const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      updateWeather(latitude, longitude);
    },
    (error) => {
      window.location.hash = defaultLocation;
    }
  );
};

/**
 *
 * @param {string} query Searched location query e.g. city name
 */
const searchedLocation = (query) => updateWeather(...query.split('&'));
// updateWeather("lat=37.51712", "lon=126.7159")

const routes = new Map([
  ['/current-location', currentLocation],
  ['/weather', searchedLocation],
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1); // slice - 글자 자르기. slice함수는 두번째 인자로 넘어온 종료 인덱스가 가리키는 값은 포함하지 않는다. 두번째 인자가 없으면 그 뒤로 오는 나머지를 모두 포함한다.
  // console.log(requestURL);
  const [route, query] = requestURL.includes
    ? requestURL.split('?')
    : [requestURL, ''];
  routes.get(route) ? routes.get(route)(query) : 'Error 404';
};

window.addEventListener('hashchange', checkHash); // https://writingdeveloper.tistory.com/219
window.addEventListener('load', function () {
  if (!window.location.hash) {
    window.location.hash = '#/current-location'; // 주소창 끝에 해시태그 지정
  } else {
    checkHash();
  }

  console.log(window.location.hash);
});
