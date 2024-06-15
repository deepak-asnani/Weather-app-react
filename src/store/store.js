import { create } from "zustand";
import { userAuthenticationSlice } from "./userAuthenticationSlice";

export const store = create((...set) => {
    console.log("set:- ", set);
  return {
    ...userAuthenticationSlice(...set),
  };
});
