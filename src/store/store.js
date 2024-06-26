import { create } from "zustand";
import { userAuthenticationSlice } from "./userAuthenticationSlice";
import { weatherSlice } from "./weatherSlice";
import { themeSlice } from "./themeSlice";

export const store = create((...set) => {
  return {
    ...userAuthenticationSlice(...set),
    ...weatherSlice(...set),
    ...themeSlice(...set),
  };
});
