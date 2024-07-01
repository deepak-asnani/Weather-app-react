import UserAuthentication from "../pages/userAuthentication/UserAuthentication";
import PrivateRoute from "../components/PrivateRoute";
import WeatherDetails from "../pages/weatherDetails/WeatherDetails";
import { createBrowserRouter } from "react-router-dom";
import ROUTES from "./AppRoutes";

const router = createBrowserRouter([
  {
    path: ROUTES.AUTH_PAGE,
    element: <UserAuthentication />,
  },
  {
    path: ROUTES.WEATHER_DETAILS,
    element: <PrivateRoute component={WeatherDetails} />,
  },
]);

export default router;
