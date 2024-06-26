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
      <img src={icon} alt="weather icon" className="w-5 h-5" />
      <p className="text-xs text-white font-bold">{`${value} ${unit}`}</p>
      <p className="text-xs">{label}</p>
    </div>
  );
};

const WeatherDetailsCard = () => {
  const cityDetails = store((state) => state.cityDetails);

  const { weatherDetails, isLoading } = useFetchWeatherDetails(cityDetails);

  /* Loader */

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

  /* Weather Details Card */

  return (
    <Card customStyles={"md:w-[50%] h-[100%]"}>
      <div className="flex max-[460px]:flex-col justify-between text-white rounded-lg p-2 gap-2 h-full">
        <div className="flex min-[460px]:flex-col items-center justify-between gap-1">
          <div className="flex flex-col">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-slate-500">
              {weatherDetails.temperature}°C
            </p>
            <p className="text-sm text-white">
              Feels like
              <span className="font-bold">{weatherDetails.feelsLike}°C</span>
            </p>
          </div>

          <div className="flex min-[460px]:flex-col text-sm min-[460px]:mt-4 gap-6 min-[460px]:gap-3">
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
        <div className="flex flex-col justify-center items-center h-auto">
          <div>
            <img
              src={weatherDetails.weatherIcon}
              alt="weather icon"
              className="w-36 h-36 object-cover"
            />
          </div>

          <p className="text-xl font-bold">{weatherDetails.weather}</p>
        </div>
        <div className="flex min-[460px]:justify-between text-white rounded-lg gap-2 min-[460px]:gap-10 mt-6 min-[460px]:mt-0">
          <div className="flex flex-wrap min-[460px]:flex-col justify-between gap-4 w-full">
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
            <WeatherItem
              icon={wind}
              label={"wind speed"}
              value={weatherDetails.windSpeed}
              unit={"km/h"}
            />
          </div>
          {/* <div className="flex flex-col  gap-1">
            <WeatherItem
              icon={wind}
              label={"wind speed"}
              value={weatherDetails.windSpeed}
              unit={"km/h"}
            />
          </div> */}
        </div>
      </div>
    </Card>
  );
};

export default WeatherDetailsCard;
