const input = document.querySelector(".bar");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const type = document.querySelector(".weather-type");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humidity");
const icon = document.querySelector("#weather-icon");

function convertion(val) {
  return (val - 273).toFixed(2);
}

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
      // const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      // document.getElementById("icon").innerHTML = `   <img src=${iconUrl} />`;
      const icond = `${data.weather[0].icon}`;
      const iconr = "http://openweathermap.org/img/w/" + icond + ".png";
      icon.setAttribute("src", `${iconr}`);

      // another way

      // const weather = document.createElement("div");
      // weather.classList.add("weather");
      // weather.innerHTML = `
      // <h2> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
      // <small>${data.weather[0].main}</small>
      // `;

      console.log(data);
    });
});
