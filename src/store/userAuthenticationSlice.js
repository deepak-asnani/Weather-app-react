import { storeUserAuthDetails } from "../helpers";

export const userAuthenticationSlice = (set) => ({
  isValidUser: false,
  userAuthDetails: null,
  user: null,
  authenticateUser: ({ isValidUser, id, token }) => {
    storeUserAuthDetails({ id, token });
    return set(() => ({
      isValidUser,
      userAuthDetails: { id, token },
    }));
  },

  updateUserDetails: (userDetails) => {
    set(() => ({
      user: userDetails,
    }));
  },
});
