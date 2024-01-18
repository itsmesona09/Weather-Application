const container = document.querySelector(".container");
const searchButton = document.querySelector(".search button");
const weather = document.querySelector(".weather");
const weatherdetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

searchButton.addEventListener("click", () => {
  const cityInput = document.querySelector(".search input");
  const city = cityInput.value;

  if (city === "") {
    alert("Please enter a valid City Name!");
    return;
  }

  const APIkey = "e7a2c1d4f91053e1cc55f5803312301b";
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;

  fetch(APIurl)
    .then((response) => response.json())
    .then((json) => {
      if (json.cod == "404") {
        container.style.height = "400px";
        weather.classList.remove("active");
        weatherdetails.classList.remove("active");
        error404.classList.add("active");
        return;
      }

      container.style.height = "555px";
      weather.classList.add("active");
      weatherdetails.classList.add("active");
      error404.classList.remove("active");

      const image = document.querySelector(".weather .icons");
      const temperature = document.querySelector(".weather .temperature");
      const description = document.querySelector(".weather .description");

      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          console.log("Weather Condition:", json.weather[0].main);
          console.log("Image Source:", image.src);
          break;
        case "Rain":
          image.src = "images/rain.png";
          console.log("Weather Condition:", json.weather[0].main);
          console.log("Image Source:", image.src);
          break;
        case "Snow":
          image.src = "images/snow.png";
          console.log("Weather Condition:", json.weather[0].main);
          console.log("Image Source:", image.src);
          break;
        case "Clouds":
          image.src = "images/cloud.png";
          console.log("Weather Condition:", json.weather[0].main);
          console.log("Image Source:", image.src);
          break;
        case "Mist":
          image.src = "images/mist.png";
          console.log("Image Source:", image.src);
          break;
        case "Haze":
          image.src = "images/cloud.png";
          console.log("Weather Condition:", json.weather[0].main);
          console.log("Image Source:", image.src);
          break;
        default:
          break;
      }
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/hr`;
    });
});
