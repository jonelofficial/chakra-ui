import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please input a valid email account")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
});
