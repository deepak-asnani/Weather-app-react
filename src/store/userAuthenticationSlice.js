export const userAuthenticationSlice = (set) => ({
  isValidUser: false,
  authenticateUser: (isUserAuthenticated) =>
    set((state) => ({ isValidUser: isUserAuthenticated })),
});
