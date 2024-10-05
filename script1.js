const apiKEY = "52abb3829b4209bb56047ec96dae6b71";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const cityname = document.querySelector(".city");
const temp = document.querySelector(".temp");
const Humidity = document.querySelector(".humidity");
const Wind = document.querySelector(".Wind");
const btn = document.querySelector(".search button");
const col1 = document.querySelector(".hum");
const col2 = document.querySelector(".win");

async function checkWeather(city) {
    const response = await fetch(apiURL + city +`&appid=${apiKEY}`);
    let data = await response.json();
    cityname.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "°C";
    Humidity.innerText = data.main.humidity + "%";
    col1.innerText = "Humidity";
    Wind.innerText = data.wind.speed + " kmph";
    col2.innerText = "Wind Speed";
}

btn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});







