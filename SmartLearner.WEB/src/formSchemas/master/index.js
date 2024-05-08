import * as yup from "yup";

export const enquiryFormSchema = yup.object({
    name: yup.string().required("Name is required").trim(),
    email: yup.string().required("Email is required").trim(),
    phoneNumber: yup.number().required("Phone Number is required"),
    message: yup.number().required("Message is required")
});

export const drivenBeforeFormSchema = yup.object({
    drivenBefore: yup.string().required("Driven Before is required").trim(),
    preferredType: yup.string().required("Preferred Type is required").trim(),
    postcode: yup.number().required("Price is required")
});

export const callBackFormSchema = yup.object({
    name: yup.string().required("Name is required").trim(),
    email: yup.string().required("Image URL is required").trim(),
    phoneNumber: yup.number().required("Price is required"),
    message: yup.number().required("Stock is required")
});

export const serviceFormSchema = yup.object({
    service: yup.string().required("Name is required").trim(),
    name: yup.string().required("Image URL is required").trim(),
    email: yup.number().required("Price is required"),
    postcode: yup.number().required("Stock is required"),
    message: yup.string().required("Duration is required").trim(),
});

export const contactFormSchema = yup.object({
    firstName: yup.string().required("Name is required").trim(),
    lastName: yup.string().required("Image URL is required").trim(),
    address: yup.number().required("Price is required"),
    postalCode: yup.number().required("Stock is required"),
    mobileNo: yup.string().required("Duration is required").trim(),
    email: yup.string().required("Experience is required").trim(),
    tutionType: yup.string().required("Transmission is required").trim(),
    instructorType: yup.array().of(yup.string().required("Postcode is required")).required("At least one postcode is required"),
    message: yup.array().of(yup.string().required("Area is required")).required("At least one area is required")
});
