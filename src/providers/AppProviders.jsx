import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "../Routes/AppRouter";

const queryClient = new QueryClient();

const AppProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>{children && children}</RouterProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
