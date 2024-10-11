import * as yup from "yup";

export const blogsSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  blogName: yup.string().trim().required("Blog name is required"),

  description: yup.string().trim().required("Description is required"),

  content: yup.string().trim().required("Content is required"),

  shortContent: yup
    .string()
    .trim()
    .max(150, "Short content must be at most 150 characters")
    .required("Short content is required"),
  image: yup.string().trim().required("Short content is required"),
  createdAt: yup
    .date()
    .required()
    .default(() => new Date()),
  updatedAt: yup.boolean().required("Update status is required").default(false),
});
