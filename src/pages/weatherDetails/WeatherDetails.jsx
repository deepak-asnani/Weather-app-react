import React from "react";
import UserDetailsCard from "./UserDetailsCard";
import WeatherHeader from "./WeatherHeader";
import WeatherDetailsCard from "./WeatherDetailsCard";

const WeatherDetails = () => {
  return (
    <div className="bg-white dark:bg-page-gradient min-h-[100vh] p-4 md:p-8">
      <WeatherHeader />
      <div>
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap:2 mt-10 h-auto">
          <UserDetailsCard />
          <WeatherDetailsCard />
        </div>
        {/* <WeatherForecastDetails /> */}
      </div>
    </div>
  );
};

export default WeatherDetails;
