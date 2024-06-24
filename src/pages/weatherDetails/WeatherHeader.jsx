import React, { useState, useCallback } from "react";
import Switch from "react-switch";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import _ from "lodash";

const WeatherHeader = () => {
  const [searchText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();

  const debouncedSearch = useCallback(
    _.debounce((searchTerm) => {
      console.log("Searching for:", searchTerm);
    }, 500),
    []
  );

  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    debouncedSearch(value);
  };
  
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const onLogout = () => {
    localStorage.removeItem("userAuth");
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center mb-8 gap-4">
      <div className="flex items-center gap-3 w-full">
        {/*  Theme Toggle Starts */}
        <div className="min-w-[75px]">
          <Switch
            onChange={handleChange}
            checked={isChecked}
            height={20}
            width={60}
            checkedIcon={false}
            uncheckedIcon={false}
            onHandleColor="#fff"
            offHandleColor="#000"
            offColor="#fff"
            onColor="#232b2b"
          />
          <p className="text-white font-bold text-xs w-full">Dark Mode</p>
        </div>

        {/*  Theme Toggle Ends */}

        {/*  Search Bar Starts */}

        <input
          value={searchText}
          onChange={handleSearchInputChange}
          className="rounded-full h-10 w-full md:w-[50%] bg-[#373636] border-gray-400 outline-none p-3 caret-white text-white"
          placeholder="Search for your preferred city..."
        ></input>

        {/*  Search Bar Ends */}
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
