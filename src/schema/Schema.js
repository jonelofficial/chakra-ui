import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("This field is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
  lastName: yup
    .string()
    .required("This field is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
  email: yup
    .string()
    .email("Please input a valid email account")
    .required("This field is required"),
  phoneNumber: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  teamGroup: yup.string().required("This field is required"),
  datePicker: yup.string().required("This field is required"),
  compliance: yup
    .boolean()
    .required("This field is required")
    .oneOf([true], "The terms and conditions must be accepted."),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please input a valid email account")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
});
