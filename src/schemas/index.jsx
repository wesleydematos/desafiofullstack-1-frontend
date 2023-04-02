import * as yup from "yup";

export const createSchema = yup.object({
  name: yup.string().max(50, "⚠ Maximum 50 characters!").required(),
  email: yup.string().max(50, "⚠ Maximum 50 characters!").required(),
  phoneNumber: yup.string().max(15, "⚠ Maximum 15 characters!").required(),
});
