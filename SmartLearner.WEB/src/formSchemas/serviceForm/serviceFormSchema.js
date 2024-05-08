import * as yup from "yup";

export const serviceFormSchema = yup.object({
    service: yup.string().required("Service selection is required").trim(),
    name: yup.string().required("Name is required").trim(),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format")
      .trim(),
    postcode: yup.string().required("Please enter your postcode"),
  
    message: yup.string().required("Message is required").trim(),
  });