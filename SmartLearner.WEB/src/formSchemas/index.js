import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  image: yup.string().required("Image URL is required").trim(),
  price: yup.number().required("Price is required"),
  stock: yup.number().required("Stock is required"),
  duration: yup.string().required("Duration is required").trim(),
  experience: yup.string().required("Experience is required").trim(),
  transmission: yup.string().required("Transmission is required").trim(),
  postcode: yup.array().of(yup.string().required("Postcode is required")).required("At least one postcode is required"),
  areaIncluded: yup.array().of(yup.string().required("Area is required")).required("At least one area is required"),
  rating: yup.number().required("Rating is required"),
  description: yup.string().required("Description is required").trim(),
  createdOn: yup.date().required("Creation date is required"),
  isUpdated: yup.boolean().required("Update status is required").default(false),
  modifiedOn: yup.date(),
  isDeleted: yup.boolean().required("Deletion status is required").default(false),
  deletedOn: yup.date(),
});
