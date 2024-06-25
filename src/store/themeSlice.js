export const themeSlice = (set) => ({
  theme: "dark",
  toggleTheme: (theme) => {
    set(() => ({
      theme,
    }));
  },
});
