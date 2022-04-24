const input = document.querySelector(".bar");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const type = document.querySelector(".weather-type");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humidity");

function convertion(val) {
  return (val - 273).toFixed(2);
}
// btn.addEventListener("click", function () {
//   navigator.geolocation.getCurrentPosition((position) => {
//     fetch(
//       `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
//     )
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("Weather data not available");
//         }
//         return res.json();
//       })

//       .then((data) => {
//         city.textContent = `${data.name}`;
//         temp.textContent = `${Math.round(data.main.temp)}º`;
//         type.textContent = `${data.weather[0].main}`;
//         wind.textContent = `Wind Speed : ${data.wind.speed} km/h`;
//         humid.textContent = `Humidity : ${data.main.humidity}`;
//       });
//   });
// });

let api = "79521938c67962189df9797752b0e69c";
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=" +
      api
  )
    .then((res) => res.json())
    .then((data) => {
      city.textContent = `${data.name}`;
      temp.textContent = `${convertion(data.main.temp)} ºC`;
      type.textContent = `${data.weather[0].main}`;
      wind.textContent = `Wind Speed : ${data.wind.speed} km/h`;
      humid.textContent = `Humidity : ${data.main.humidity}`;

      console.log(data);
    });
});
