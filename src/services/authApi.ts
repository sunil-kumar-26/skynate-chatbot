import api from "./api";

export const login = (paylaod: object) => {
  return api.post("/auth/login", paylaod);
};

export const signup = (paylaod: object) => {
  return api.post("/auth/signup", paylaod);
};

export const forgotPassword = (paylaod: object) => {
  return api.put("/auth/forgotPassword", paylaod);
};

export const resetPassword = (paylaod: object) => {
  return api.post("/auth/resetPassword", paylaod);
};

export const verifyEmail = (payload: object) => {
  return api.post("/auth/verify-email", payload);
};
