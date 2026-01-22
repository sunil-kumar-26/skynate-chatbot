import { createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import App from "../App";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />,
  },
  {
    path: "/auth/login",
      lazy:async () => {
    const module = await import("../pages/LoginPage");
    return { Component: module.default };
  },
  },
]);

export default Routes;
