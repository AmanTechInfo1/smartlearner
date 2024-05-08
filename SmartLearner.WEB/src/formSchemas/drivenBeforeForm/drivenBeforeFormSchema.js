import * as yup from "yup";
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