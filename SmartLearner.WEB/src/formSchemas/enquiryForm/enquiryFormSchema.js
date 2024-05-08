import * as yup from "yup";
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