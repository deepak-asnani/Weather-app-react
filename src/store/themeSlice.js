import { getJSONParsedData, setThemeInLocalStorage } from "../helpers";

export const themeSlice = (set) => ({
  theme: getJSONParsedData("theme") ?? "dark",
  toggleTheme: (theme) => {
    setThemeInLocalStorage(theme)
    set(() => ({
      theme,
    }));
  },
});
