import React from "react";
import Card from "../../components/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchUserDetails } from "../../apiUtils";
import { getCurrentDayAndTime, getJSONParsedData } from "../../helpers";
import { store } from "../../store/store";

const UserDetailsCard = () => {
  const userId =
    store((state) => {
      return state.userAuthDetails?.id;
    }) || getJSONParsedData("userAuth", "id");

  const {
    isLoading,
    data: user,
  } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: fetchUserDetails,
    enabled: !!userId,
  });

  const { currentTime, currentDayAndDate } = getCurrentDayAndTime();

  if (isLoading || !user) return null;

  return (
    <Card customStyles={"md:w-[30%]"}>
      <div className="flex justify-center items-center flex-col gap-10 h-full p-4">
        <p className="text-white font-bold text-lg">{user.name}</p>
        <div className="text-center">
          <p className="text-white text-4xl font-extrabold">{currentTime}</p>
          <p className="text-white text-sm">{currentDayAndDate}</p>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(UserDetailsCard);
