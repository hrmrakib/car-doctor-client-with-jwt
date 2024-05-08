import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import { GetAge } from "../components/GetAge";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/getAge",
        element: <GetAge />,
      },
    ],
  },
]);

export default router;
