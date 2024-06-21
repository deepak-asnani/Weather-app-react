// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import UserAuthentication from "./pages/userAuthentication/UserAuthentication";
// import PrivateRoute from "./components/PrivateRoute";
// import WeatherDetails from "./pages/WeatherDetails";
import AppProviders from "./providers/AppProviders";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserAuthentication />,
//   },
//   {
//     path: "/weather",
//     element: <PrivateRoute component={WeatherDetails} />,
//   },
// ]);

function App() {
  return (
    <div className="h-[100vh]">
      <AppProviders />
    </div>
  );
}

export default App;
