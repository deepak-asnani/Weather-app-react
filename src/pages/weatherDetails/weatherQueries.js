import { useQuery } from "@tanstack/react-query";
import {
  fetchLocationDetails,
  fetchWeatherDetails,
  fetchWeatherForecastDetails,
} from "../../apiUtils";

export const useFetchSearchResults = (searchedText) => {
  const { data: searchedCities, error: searchedError, isSuccess } = useQuery({
    queryKey: ["locationDetails", searchedText],
    queryFn: fetchLocationDetails,
    enabled: !!searchedText,
  });

  return { searchedCities, searchedError, isSuccess };
};

export const useFetchWeatherDetails = (selectedCityDetails) => {
  const {
    isLoading,
    data: weatherDetails,
    error: weatherError,
    isError,
  } = useQuery({
    queryKey: ["weatherDetails", selectedCityDetails],
    queryFn: fetchWeatherDetails,
    enabled: !!selectedCityDetails,
  });

  return { weatherDetails, weatherError, isLoading, isError };
};

export const useFetchWeatherForecastDetails = (selectedCityDetails) => {
  const {
    isLoading,
    data: weatherForecastDetails,
    error: weatherForecastError,
  } = useQuery({
    queryKey: ["weatherForecastDetails", selectedCityDetails],
    queryFn: fetchWeatherForecastDetails,
    enabled: !!selectedCityDetails,
  });

  return { weatherForecastDetails, weatherForecastError, isLoading };
};
