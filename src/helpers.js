import moment from "moment";
import {
  FORECAST_API,
  KELVIN_TO_CELSIUS_VALUE,
  LOCATION_API,
  WEATHER_API,
  WEATHER_API_BASE_URL,
  WEATHER_API_KEY,
} from "./constants";

export const storyParameters = (desc) => {
  const parameters = {
    docs: {
      description: {
        story: desc,
      },
    },
  };
  return parameters;
};

export const getParsedUserDetails = (userDetails) => {
  if (!(userDetails && Object.keys(userDetails).length)) {
    return;
  }
  const { id, first_name, last_name } = userDetails;
  const user = {
    id,
    name: `${first_name} ${last_name}`,
  };
  return user;
};

export const getCurrentDayAndTime = () => {
  const currentDateAndTime = new Date();

  const currentTime = moment(currentDateAndTime).format("LT");

  const currentDayAndDate = moment(currentDateAndTime).format("dddd, Do MMMM");

  return { currentTime, currentDayAndDate };
};

export const storeUserAuthDetails = (userAuthDetails) => {
  localStorage.setItem("userAuth", JSON.stringify(userAuthDetails));
};

export const getJSONParsedData = (dataKey, dataItem) => {
  try {
    const data = JSON.parse(localStorage.getItem(dataKey));
    return data[dataItem];
  } catch (error) {
    console.log(
      `Error parsing JSON data with key ${dataKey} and value ${dataItem}`
    );
  }
};

export const getLocationAPIUrl = ({ searchedText, limit = 1 }) => {
  const locationAPI = `${WEATHER_API_BASE_URL}${LOCATION_API}?q=${searchedText}&limit=${limit}&appid=${WEATHER_API_KEY}`;
  return locationAPI;
};

export const getWeatherAPIUrl = ({ latitude, longitude }) => {
  const weatherAPI = `${WEATHER_API_BASE_URL}${WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
  return weatherAPI;
};

export const getForecastAPIUrl = ({ latitude, longitude, days }) => {
  const forecastAPI = `${WEATHER_API_BASE_URL}${FORECAST_API}?lat=${latitude}&lon=${longitude}&cnt=${days}&appid=${WEATHER_API_KEY}`;
  return forecastAPI;
};

export const convertKelvinToCelsius = (temperature) => {
  return (temperature - KELVIN_TO_CELSIUS_VALUE).toFixed(2);
};

export const convertUnixToDateAndTime = (unix) => {
  const date = new Date(unix * 1000);
  return { date, time: moment(date.getTime()).format("LT") };
};

export const getWeatherIcon = (weatherIconCode) => {
  const icon = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  return icon;
};

export const getParsedWeatherDetails = (response) => {
  try {
    const { weather, wind, sys, main, id } = response;
    console.log("weather:- ", weather);
    const weatherDetails = {
      id,
      feelsLike: convertKelvinToCelsius(main.feels_like),
      temperature: convertKelvinToCelsius(main.temp),
      pressure: main.pressure,
      humidity: main.humidity,
      sunrise: convertUnixToDateAndTime(sys.sunrise).time,
      sunset: convertUnixToDateAndTime(sys.sunset).time,
      windSpeed: wind.speed,
      weather: weather[0].main,
      weatherId: weather[0].id,
      weatherIcon: getWeatherIcon(weather[0].icon),
    };
    return weatherDetails;
  } catch (error) {
    console.log("-------Error parsing weather details---------");
  }
};
