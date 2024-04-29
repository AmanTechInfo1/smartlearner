import * as yup from "yup";

export const addcategorySchema = yup.object({
    name: yup.string().required("Name is required").trim(),
    description: yup.string().nullable().trim(),
}); 