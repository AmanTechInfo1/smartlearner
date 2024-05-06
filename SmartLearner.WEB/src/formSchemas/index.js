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
  password: yup.string().required("Password is required").trim(),
});

export const createRoleSchema = yup.object({
  name: yup.string().required("Role Name is required").trim(),
});
// /////////////////////////////////////////////////
export const contactFormSchema = yup.object({
  firstName: yup.string().required("First name is required").trim(),
  lastName: yup.string().required("Last name is required").trim(),
  address: yup.string().required("Address is required").trim(),
  postcode: yup
    .string()
    .required("Please enter your postcode")
    .matches(
      /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/,
      "Please enter a valid UK postcode"
    ),
  mobileNo: yup.string().required("Mobile number is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  tutionType: yup.string().required("Tution type selection is required").trim(),
  instructorType: yup
    .string()
    .required("Instructor type selection is required")
    .trim(),
  message: yup.string().required("Message is required").trim(),
});

// ////
export const serviceFormSchema = yup.object({
  service: yup.string().required("Service selection is required").trim(),
  name: yup.string().required("Name is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  postcode: yup
    .string()
    .required("Please enter your postcode")
    .matches(
      /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/,
      "Please enter a valid UK postcode"
    ),
  message: yup.string().required("Message is required").trim(),
});

// //////////
export const callBackFormSchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  phoneNumber: yup.string().required("Mobile Number is required").trim(),
  message: yup.string().required("Message is required").trim(),
});

export const enquiryFormSchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  phoneNumber: yup.string().required("Mobile Number is required").trim(),
  message: yup.string().required("Message is required").trim(),
});

export const drivenBeforeFormSchema = yup
  .object({
    drivenBefore: yup
      .string()
      .required("Please select whether you've driven before"),
    preferredType: yup
      .string()
      .required("Please select your preferred type of driving"),
    postcode: yup
      .string()
      .required("Please enter your postcode")
      .matches(
        /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/,
        "Please enter a valid UK postcode"
      ),
  })
  .required();
