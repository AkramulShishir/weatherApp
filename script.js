
const cityInput = document.getElementById('input-city');
const btn = document.getElementById('btn');








// const apiKey= "ef996c12309e7ec53c2c0f0212911a9b";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city;

async function checkWeather(city = 'bangladesh') {
  const weatherEl = document.querySelector('.weather');
  const errorEl = document.querySelector('.error');

  const apiKey= "ef996c12309e7ec53c2c0f0212911a9b";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + city;
  const respose = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await respose.json();

  console.log(respose.status);

  if(respose.status === 404) {
    weatherEl.style.display = 'none';
    errorEl.style.display = 'block';
  } else{
    weatherEl.style.display = 'block';
    errorEl.style.display = 'none';
  }

  document.querySelector(".temp").innerHTML = data.main.temp + '°c';
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
  document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';
  document.querySelector(".weather-icon").src = 'images/'+ data.weather[0].main.toLowerCase()+ '.png';


}

checkWeather();

btn.addEventListener("click", function() {
  checkWeather(cityInput.value)

})


// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=ef996c12309e7ec53c2c0f0212911a9b


// console.log(btn);


