import * as yup from "yup";

export const quizCategorySchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  description: yup.string().nullable().trim(),
  createdOn: yup.date().required("Creation date is required"),
  isDeleted: yup
    .boolean()
    .required("Deletion status is required")
    .default(false),
  deletedOn: yup.date(),
});