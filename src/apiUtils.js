import axios from "axios";
import {
  AUTH_BASE_URL,
  FETCH_USER_DETAILS_API,
  LOGIN_API,
  REGISTER_USER_API,
} from "./constants";
import { getParsedUserDetails } from "./helpers";

/* Register API Call For New Users */

export const registerUser = async (userData) => {
  const url = `${AUTH_BASE_URL}${REGISTER_USER_API}`;
  const response = await axios.post(url, userData);
  return response.data;
};

/* Login API For Existing Users */

export const loginUser = async (userData) => {
  const url = `${AUTH_BASE_URL}${LOGIN_API}`;
  const response = await axios.post(url, userData);
  return response.data;
};

/* Fetch User Details API */

export const fetchUserDetails = async ({ queryKey }) => {
  const userId = queryKey[1];
  const url = `${AUTH_BASE_URL}${FETCH_USER_DETAILS_API}/${userId}`;
  const response = await axios.get(url);
  const parsedUserDetails = getParsedUserDetails(response.data.data);
  return parsedUserDetails;
};


/*  Fetch Location Details */
