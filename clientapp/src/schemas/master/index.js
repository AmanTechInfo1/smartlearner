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