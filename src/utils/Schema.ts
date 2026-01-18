import * as yup from "yup";

export const signupSchema = yup.object({
  userName: yup
    .string()
    .min(3, " Atleast 3 characters required")
    .required("User name is required")
    .trim(),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password")], "Passwords must match")
  //   .required("Confirm password is required"),
  terms: yup
    .boolean()
    .oneOf([true], "Accept the terms and conditions")
    .required("You must accept the terms"),
});

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const modalSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});
