import moment from "moment";

export const storyParameters = (desc) => {
  const parameters = {
    docs: {
      description: {
        story: desc,
      },
    },
  };
  return parameters;
};

export const getParsedUserDetails = (userDetails) => {
  if (!(userDetails && Object.keys(userDetails).length)) {
    return;
  }
  const { id, first_name, last_name } = userDetails;
  const user = {
    id,
    name: `${first_name} ${last_name}`,
  };
  return user;
};

export const getCurrentDayAndTime = () => {
  const currentDateAndTime = new Date();

  const currentTime = moment(currentDateAndTime).format("LT");

  const currentDayAndDate = moment(currentDateAndTime).format("dddd, Do MMMM");

  return { currentTime, currentDayAndDate };
};

export const storeUserAuthDetails = (userAuthDetails) => {
  localStorage.setItem("userAuth", JSON.stringify(userAuthDetails));
};

export const getJSONParsedData = (dataKey, dataItem) => {
  try {
    const data = JSON.parse(localStorage.getItem(dataKey));
    return data[dataItem];
  } catch (error) {
    console.log(
      `Error parsing JSON data with key ${dataKey} and value ${dataItem}`
    );
  }
};
