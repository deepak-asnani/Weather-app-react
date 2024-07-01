import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import _ from "lodash";
import { useFetchSearchResults } from "./weatherQueries";
import { store } from "../../store/store";
import ThemeSwitch from "../../components/ThemeSwitch";

const WeatherHeader = () => {
  const [searchText, setSearchText] = useState("");
  const [cityName, setCityName] = useState("");
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] = useState(false);
  const navigate = useNavigate();
  const updateCityDetails = store((state) => {
    return state.updateCityDetails;
  });

  const debouncedSearch = useCallback(
    _.debounce((searchTerm) => {
      setCityName(searchTerm);
    }, 400),
    []
  );

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const {
          coords: { latitude, longitude },
        } = position;
        updateCityDetails({
          lat: latitude,
          lon: longitude,
        });
      });
    };
    if (!searchText.length) {
      fetchCurrentLocation();
    }
  }, []);

  const { searchedCities, isSuccess } =
    useFetchSearchResults(cityName);
  useEffect(() => {
    if (isSuccess) {
      setIsSuggestionBoxOpen(true);
    }
  }, [isSuccess]);

  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    debouncedSearch(value);
  };

  const onLogout = () => {
    localStorage.removeItem("userAuth");
    navigate("/");
  };

  const handleResultClick = (cityDetails) => {
    setIsSuggestionBoxOpen(false);
    updateCityDetails(cityDetails);
  };
  return (
    <div className="flex justify-between items-center mb-8 gap-4">
      <div className="flex items-center gap-3 w-full">
        {/*  Theme Toggle Starts */}
        <div className="min-w-[75px]">
          <ThemeSwitch />
        </div>

        {/*  Theme Toggle Ends */}

        {/*  Search Component Starts */}

        <div className="w-full md:w-[50%]">
          {/*  Search Bar Starts */}

          <input
            value={searchText}
            onChange={handleSearchInputChange}
            className="rounded-full h-10 w-full bg-[#373636] border-gray-400 outline-none p-3 caret-white text-white relative"
            placeholder="Search for your preferred city..."
          ></input>

          {/*  Search Bar Ends */}

          {/* Search Results Starts */}

          {searchedCities?.length && isSuggestionBoxOpen ? (
            <div className="absolute mt-1 w-[42%] bg-white shadow-lg rounded-md z-10">
              {searchedCities.map((city) => (
                <div
                  key={`${city.country}-${city.name}-${city.lat}`}
                  onClick={() => handleResultClick(city)}
                  className="p-2 hover:bg-gray-200 cursor-pointer rounded-md"
                >
                  {`${city.name} (${city.country})`}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}

          {/* Search Results Ends */}
        </div>

        {/*  Search Component Ends */}
      </div>
      <Button
        backgroundColor={"bg-green-600"}
        textColor="text-white"
        style={`min-w-[100px] py-2 px-4 rounded-full`}
        label={"Log out"}
        onClick={onLogout}
      />
    </div>
  );
};

export default WeatherHeader;
