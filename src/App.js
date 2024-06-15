import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserAuthentication from "./pages/UserAuthentication";
import PrivateRoute from "./components/PrivateRoute";
import WeatherDetails from "./pages/WeatherDetails";
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

function App() {
  return (
    <div className="h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
