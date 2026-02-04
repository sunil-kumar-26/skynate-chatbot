import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../pages/AuthLayout";
import RouteLoader from "../utils/RouteLoader";
import HomeLayout from "../pages/HomeLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    lazy: RouteLoader("home"),
  },
  {
    path: "/chat",
    Component: HomeLayout,
    children: [{ index: true, lazy: RouteLoader("chat") }],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "signup",
        lazy: RouteLoader("signup"),
      },
      {
        path: "login",
        lazy: RouteLoader("login"),
      },
      {
        path: "forgotPassword",
        lazy: RouteLoader("forgotPassword"),
      },
      {
        path: "resetPassword",
        lazy: RouteLoader("resetPassword"),
      },
      { path: "verifyEmail", lazy: RouteLoader("verifyEmail") },
    ],
  },
  {
    path: "*",
    lazy: RouteLoader("page404"),
  },
]);

export default Routes;
