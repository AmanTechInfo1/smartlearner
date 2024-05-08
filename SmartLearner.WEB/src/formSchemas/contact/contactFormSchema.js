import * as yup from "yup";

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