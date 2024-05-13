const api_key = 'de902ba20898389bf3b79a41aef5c700';

export const url = {
  //endpoint urls
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  },
  // 백틱을 써야 변수를 결과값 안에 넣는 것이 가능하다.

  geocode(location) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5`;
  },

  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
  },
};

/**
 *
 * @param {string} url
 * @param {function} callback
 */

export const fetchData = function (url, callback) {
  fetch(`${url}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};
