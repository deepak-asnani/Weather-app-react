import UserAuthentication from "../pages/userAuthentication/UserAuthentication";
import PrivateRoute from "../components/PrivateRoute";
import WeatherDetails from "../pages/weatherDetails/WeatherDetails";
import { createBrowserRouter } from "react-router-dom";

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

  export default router;