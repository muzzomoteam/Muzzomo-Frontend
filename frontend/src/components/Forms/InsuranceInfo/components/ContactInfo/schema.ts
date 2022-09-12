import * as Yup from "yup";

export type FormFields = {
  first_name: string;
  last_name: string;
  email: string;
  postal_code: string;
};

export const initialFormFieldValues: FormFields = {
  first_name: "",
  last_name: "",
  email: "",
  postal_code: "",
};

export const formFieldValidationCriteria = Yup.object<
  Record<keyof FormFields, Yup.AnySchema>
>({
  first_name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "First name cannot contain special characters")
    .max(128, "First name must be less than 128 characters")
    .min(1, "First name cannot be empty")
    .required("Name cannot be empty"),
  last_name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Last name cannot contain special characters")
    .max(128, "Last name must be less than 128 characters")
    .min(1, "Last name cannot be empty")
    .required("Name cannot be empty"),
  email: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email"
    )
    .max(128, "Email must be less than 128 characters")
    .min(5, "Invalid email")
    .required("Email cannot be empty"),
  postal_code: Yup.string()
    .matches(
      /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/,
      "Invalid postal code"
    )
    .min(6, "Invalid postal code")
    .required("Postal code cannot be empty"),
});
