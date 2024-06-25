import React from "react";
import Card from "../../components/Card";
import { store } from "../../store/store";
import { useFetchWeatherDetails } from "./weatherQueries";
import sunrise from "../../assets/images/sunrise.png";
import sunset from "../../assets/images/sunset.png";
import humidity from "../../assets/images/humidity.png";
import wind from "../../assets/images/wind.png";
import pressure from "../../assets/images/pressure.png";
import { Triangle } from "react-loader-spinner";

const WeatherItem = ({ icon, label, value, unit }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <img src={icon} alt="weather icon" className="w-8 h-8" />
      <p className="text-xs text-white font-bold">{`${value} ${unit}`}</p>
      <p className="text-xs">{label}</p>
    </div>
  );
};

const WeatherDetailsCard = () => {
  const cityDetails = store((state) => state.cityDetails);

  const { weatherDetails, isLoading } = useFetchWeatherDetails(cityDetails);

  if (!weatherDetails || isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#fff"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <Card customStyles={"md:w-[50%] h-[200px]"}>
      <div className="flex justify-between text-white rounded-lgp-2 gap-2 p-4">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-slate-500">
              {weatherDetails.temperature}°C
            </p>
            <p className="text-sm text-white">
              Feels like:{" "}
              <span className="font-bold">{weatherDetails.feelsLike}°C</span>
            </p>
          </div>

          <div className="flex flex-col text-sm mt-4 gap-3">
            <div className="flex items-center gap-2">
              <img src={sunrise} alt="weather icon" className="w-6 h-6" />
              <div>
                <p className="text-xs font-bold text-white">Sunrise</p>
                <p className="text-xs font-bold">{weatherDetails.sunrise}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={sunset} alt="weather icon" className="w-6 h-6" />
              <div>
                <p className="text-xs font-bold">Sunset</p>
                <p className="text-xs font-bold">{weatherDetails.sunset}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <div>
            <img
              src={weatherDetails.weatherIcon}
              alt="weather icon"
              className="w-24 h-24r"
            />
          </div>

          <p className="text-xl font-bold">{weatherDetails.weather}</p>
        </div>
        <div className="flex justify-between text-white rounded-lg gap-10">
          <div className="flex flex-col items-start justify-between gap-4">
            <WeatherItem
              icon={humidity}
              label={"humidity"}
              value={weatherDetails.humidity}
              unit={"%"}
            />
            <WeatherItem
              icon={pressure}
              label={"pressure"}
              value={weatherDetails.pressure}
              unit={"hPa"}
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <WeatherItem
              icon={wind}
              label={"wind speed"}
              value={weatherDetails.windSpeed}
              unit={"km/h"}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherDetailsCard;
