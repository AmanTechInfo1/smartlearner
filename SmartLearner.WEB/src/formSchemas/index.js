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

export const createRoleSchema = yup
  .object({
    name: yup.string().required("Role Name is required").trim(),
  })

  export const productSchema = yup.object({
    name: yup.string().required("Name is required").trim(),
    image: yup.string().required("Image URL is required").trim(),
    price: yup.number().required("Price is required"),
    stock: yup.number().required("Stock is required"),
    duration: yup.string().required("Duration is required").trim(),
    experience: yup.string().required("Experience is required").trim(),
    transmission: yup.string().required("Transmission is required").trim(),
    postcode: yup.array().of(yup.string().required("Postcode is required")).required("At least one postcode is required"),
    areaIncluded: yup.array().of(yup.string().required("Area is required")).required("At least one area is required"),
    rating: yup.number().required("Rating is required"),
    description: yup.string().required("Description is required").trim(),
    createdOn: yup.date().required("Creation date is required"),
    isUpdated: yup.boolean().required("Update status is required").default(false),
    modifiedOn: yup.date(),
    isDeleted: yup.boolean().required("Deletion status is required").default(false),
    deletedOn: yup.date(),
  })
  
  .required();
