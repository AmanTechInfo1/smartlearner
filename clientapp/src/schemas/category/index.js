import * as yup from "yup";

export const categorySchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  description: yup.string().nullable().trim(),
  createdOn: yup.date().required().default(() => new Date()),
  isDeleted: yup
    .boolean()
    .required("Deletion status is required")
    .default(false),
  deletedOn: yup.date(),
});

export const createAreaSchema = yup.object({
  name: yup.string().required("Area Name is required").trim(),
});
