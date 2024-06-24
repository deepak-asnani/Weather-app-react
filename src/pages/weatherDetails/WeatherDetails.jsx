import React from "react";
import UserDetailsCard from "./UserDetailsCard";
import WeatherHeader from "./WeatherHeader";

const WeatherDetails = () => {
  return (
    <div className="bg-page-gradient h-full p-2 md:p-8">
      <WeatherHeader />
      <UserDetailsCard />
    </div>
  );
};

export default WeatherDetails;
