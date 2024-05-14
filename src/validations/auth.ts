import * as Yup from "yup";
import { phonePattern } from "../constant";

export const SignUpValidation = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email address is required"),
  username: Yup.string().required("Username is required"),
  brt_card_number: Yup.string().required("BRT card number is required"),
  phone_number: Yup.string()
    .trim()
    .length(11, "Phone number must be 11 characters")
    .matches(phonePattern, "Enter valid phone number")
    .required("Phone number is required!"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(8, "Password is too short")
    .matches(/[a-z]/, "Password must contain at least one lower case")
    .matches(/[A-Z\s]+/, "Password must contain at least one upper case")
    .matches(/\d+/, "Password must contain at least one digit")
    .matches(
      /[#?!@$%^&*-]/,
      "Password must contain at least one special character"
    ),
});

export const LoginValidation = Yup.object({
  identifier: Yup.string().email().required("Email address is required"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(8, "Password is too short")
    .matches(/[a-z]/, "Password must contain at least one lower case")
    .matches(/[A-Z\s]+/, "Password must contain at least one upper case")
    .matches(/\d+/, "Password must contain at least one digit")
    .matches(
      /[#?!@$%^&*-]/,
      "Password must contain at least one special character"
    ),
});
