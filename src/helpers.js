import axios from "axios";
import { AUTH_BASE_URL, LOGIN_API, REGISTER_USER_API } from "./constants";

/* Register API call for new users */

export const registerUser = async (userData) => {
  const url = `${AUTH_BASE_URL}${REGISTER_USER_API}`;
  const response = await axios.post(url, userData);
  return response.data;
};

/* Login API for existing users */

export const loginUser = async (userData) => {
    const url = `${AUTH_BASE_URL}${LOGIN_API}`;
    const response = await axios.post(url, userData);
    return response.data;
}
