import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserAuthentication from "../pages/userAuthentication/UserAuthentication";
import PrivateRoute from "../components/PrivateRoute";
import WeatherDetails from "../pages/WeatherDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserAuthentication />,
  },
  {
    path: "/weather",
    element: <PrivateRoute component={WeatherDetails} />,
  },
]);

const AppProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>{children && children}</RouterProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
