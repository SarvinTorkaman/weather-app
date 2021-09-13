let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let cityName = prompt("Enter a city name");
cityName = cityName.trim().toLowerCase();

if (weather[cityName] !== undefined) {
  let temper = weather[cityName]["temp"];
  temper = Math.round(temper);
  let farenheit = (temper * 9) / 5 + 32;
  farenheit = Math.round(farenheit);
  let humid = weather[cityName]["humidity"];

  alert(
    `It is currently ${temper} °C (${farenheit}°F) in ${cityName} with a humidity of ${humid}% `
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`
  );
}
