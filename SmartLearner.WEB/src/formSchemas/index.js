import * as yup from "yup";

export const registerformSchema = yup.object({
    username: yup.string().required("Name is required").trim(),
    email: yup.string().required("Name is required").trim(),
    password: yup.string().required("Name is required").trim(),
    confirmPassword: yup.string().required("Name is required").trim(),
    phoneNumber: yup.string().required("Name is required").trim(),
    roleName: yup.string().required("Name is required").trim(),
    privacyPolicyChecked: yup.string().required("Name is required").trim(),
});