import * as yup from "yup";

export const createSchema = yup.object({
  name: yup.string().max(50, "⚠ Maximum 50 characters!"),
  email: yup.string().max(50, "⚠ Maximum 50 characters!"),
  phoneNumber: yup.string().max(15, "⚠ Maximum 15 characters!"),
});

export const updateSchema = yup.object({
  name: yup.string().max(50, "⚠ Maximum 50 characters!").notRequired(),
  email: yup.string().max(50, "⚠ Maximum 50 characters!").notRequired(),
  phoneNumber: yup.string().max(15, "⚠ Maximum 15 characters!").notRequired(),
});
