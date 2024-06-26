export const weatherSlice = (set) => ({
  selectedCity: null,
  cityDetails: null,
  updateSelectedCity: (cityName) => {
    set(() => ({
      selectedCity: cityName,
    }));
  },
  updateCityDetails: (city) => {
    set(() => ({
      cityDetails: city,
    }));
  },
});
