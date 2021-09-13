// part 1
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + ampm;
  return strTime;
}

function pad2(n) {
  return (n < 10 ? "0" : "") + n;
}

function handleresponse(response) {
  document.querySelector("#searchResultCityName").innerHTML =
    response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML = `${Math.round(
    response.data.wind.speed * 3.6
  )} km/h`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
}

function searchCity(city) {
  let apiKey = "dbf20d5c78580523bd2bd1f7ce5630d5";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // console.log(apiUrl);
  axios.get(apiUrl).then(handleresponse);
}
function handleSearchButton(event) {
  event.preventDefault();
  let searchBoxInput = document.querySelector("#searchBoxInpiut").value;

  searchCity(searchBoxInput);
}

function handlePosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(lat, long);
  let apiKey = "dbf20d5c78580523bd2bd1f7ce5630d5";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(handleresponse);
}
function handleCurrentClick(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];

let dayAndTime = document.querySelector("#dayAndTime");
dayAndTime.innerHTML = `${currentDay}  ${formatAMPM(now)} <br>
${pad2(now.getDate())}/${pad2(now.getMonth() + 1)}/${now.getFullYear()}`;

let formSearchInput = document.querySelector("#form-search-input");
formSearchInput.addEventListener("submit", handleSearchButton);

let currentLocationbtn = document.querySelector("#current-location-weather");
currentLocationbtn.addEventListener("click", handleCurrentClick);
searchCity("babol");
