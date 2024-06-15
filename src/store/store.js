import { create } from "zustand";
import { userAuthenticationSlice } from "./userAuthenticationSlice";

export const store = create((...set) => {
  return {
    ...userAuthenticationSlice(...set),
  };
});
