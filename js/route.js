const defaultLocation = '#/weather?lat=37.55529&lon=126.9199'; //봄아카데미 위치

window.navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;

  console.log(latitude, longitude);
});
