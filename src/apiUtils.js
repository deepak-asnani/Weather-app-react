import axios from "axios";
import {
  AUTH_BASE_URL,
  FETCH_USER_DETAILS_API,
  LOGIN_API,
  REGISTER_USER_API,
} from "./constants";
import {
  getLocationAPIUrl,
  getParsedUserDetails,
  getParsedWeatherDetails,
  getWeatherAPIUrl,
  getForecastAPIUrl,
} from "./helpers";

/* Register API Call For New Users */

export const registerUser = async (userData) => {
  const url = `${AUTH_BASE_URL}${REGISTER_USER_API}`;
  const response = await axios.post(url, userData);
  return response.data;
};

/* Login API For Existing Users */

export const loginUser = async (userData) => {
  const url = `${AUTH_BASE_URL}${LOGIN_API}`;
  const response = await axios.post(url, userData);
  return response.data;
};

/* Fetch User Details API */

export const fetchUserDetails = async ({ queryKey }) => {
  const userId = queryKey[1];
  const url = `${AUTH_BASE_URL}${FETCH_USER_DETAILS_API}/${userId}`;
  const response = await axios.get(url);
  const parsedUserDetails = getParsedUserDetails(response.data.data);
  return parsedUserDetails;
};

/*  Fetch Location Details */

export const fetchLocationDetails = async ({ queryKey }) => {
  const searchedText = queryKey[1];
  const url = getLocationAPIUrl({ searchedText, limit: 5 });
  const response = await axios.get(url);
  return response.data;
};

/* Fetch Weather Details */

export const fetchWeatherDetails = async ({ queryKey }) => {
  const selectedCityDetails = queryKey[1];
  const url = getWeatherAPIUrl({
    latitude: selectedCityDetails.lat,
    longitude: selectedCityDetails.lon,
  });
  const response = await axios.get(url);
  return getParsedWeatherDetails(response.data);
};

/* Fetch Weather Forecast Details */

export const fetchWeatherForecastDetails = async ({ queryKey }) => {
  const selectedCityDetails = queryKey[1];
  const url = getForecastAPIUrl({
    latitude: selectedCityDetails.lat,
    longitude: selectedCityDetails.lon,
    days: 5,
  });
  const response = await axios.get(url);
  console.log("response:- ", response);
  return response;
};
