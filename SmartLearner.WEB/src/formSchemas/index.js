import * as yup from "yup";
import { emailrgx, passwordRegex } from "../constants";

export const registerformSchema = yup.object({
  username: yup.string().required("Username is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailrgx, "Invalid Email")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(7)
    .matches(
      passwordRegex,
      "Password must have one special character and one uppercase letter"
    )
    .trim(),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Password must match")
    .trim(),
  phoneNumber: yup.string().required("Mobile Number is required").trim(),
  roleName: yup.string().required("Account Type is required").trim(),
  privacyPolicy: yup
    .boolean("Privacy Policy must be checked")
    .oneOf([true], "Privacy Policy must be checked")
    .required("Privacy Policy must be checked"),
});

export const loginformSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(emailrgx, "Invalid Email")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .trim(),
});