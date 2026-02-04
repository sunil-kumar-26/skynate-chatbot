const loaders = {
  home: () => import("../App"),
  signup: () => import("../pages/SignupPage"),
  login: () => import("../pages/LoginPage"),
  forgotPassword: () => import("../pages/ForgotPasswordPage"),
  verifyEmail: () => import("../pages/VerifyEmailPage"),
  resetPassword: () => import("../pages/ResetPasswordPage"),
  page404: () => import("../pages/Page404"),
   chat: () => import("../pages/ChatBot"),
};

const RouteLoader = (key: keyof typeof loaders) => {
  return async () => {
    const module = await loaders[key]();
    return { Component: module.default };
  };
};

export default RouteLoader;
