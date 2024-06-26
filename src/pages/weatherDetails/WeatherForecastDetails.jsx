import React from "react";
import { store } from "../../store/store";
import { useFetchWeatherForecastDetails } from "./weatherQueries";

const WeatherForecastDetails = () => {
  const cityDetails = store((state) => state.cityDetails);
  const { weatherForecastDetails } =
    useFetchWeatherForecastDetails(cityDetails);
  console.log("weather forecast details:- ", weatherForecastDetails);
  return <div>WeatherForecastDetails</div>;
};

export default WeatherForecastDetails;
