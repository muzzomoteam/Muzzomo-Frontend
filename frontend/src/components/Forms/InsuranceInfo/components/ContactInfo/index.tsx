import React from "react";

import { Formik } from "formik";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { formFieldValidationCriteria, FormFields } from "./schema";

type Props = {
  style: any;
  initialFormFieldValues: Record<
    keyof FormFields,
    FormFields[keyof FormFields]
  >;
  isValidForm: boolean;
  onValidFromContent: (
    formValues: Record<keyof FormFields, FormFields[keyof FormFields]>,
    isValid: boolean
  ) => any; // Don't remove, using 'any' allows the next button in the form to be fired at the correct time instead of every 'second' click
};

export default function ContactInfoForm({
  onValidFromContent,
  initialFormFieldValues,
  isValidForm = false,
  style,
}: Props): JSX.Element {
  return (
    <Formik
      initialValues={initialFormFieldValues}
      validateOnChange
      // validateOnMount
      validateOnBlur
      isInitialValid={isValidForm}
      onSubmit={() => {}}
      validationSchema={formFieldValidationCriteria}
    >
      {(props) => {
        const { values, touched, errors, isValid, handleChange, handleBlur } =
          props;

        React.useEffect(() => {
          onValidFromContent(values, isValid);
        }, [values, isValid]);

        // TODO reduce need to repeat same properties for each component everytime
        return (
          <form style={style}>
            <Box
              sx={{
                marginTop: "30px",
              }}
            >
              <TextField
                error={touched.first_name ? Boolean(errors.first_name) : false}
                label="First Name"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.first_name && touched.first_name && errors.first_name
                }
                placeholder="John"
                inputProps={{ maxLength: 128 }}
                margin="normal"
                fullWidth
              />
            </Box>

            <TextField
              error={touched.last_name ? Boolean(errors.last_name) : false}
              label="Last Name"
              placeholder="Doe"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.last_name && touched.last_name && errors.last_name
              }
              inputProps={{ maxLength: 128 }}
              margin="normal"
              fullWidth
            />

            <TextField
              error={touched.email ? Boolean(errors.email) : false}
              label="Email"
              placeholder="Doe"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.email && touched.email && errors.email}
              inputProps={{ maxLength: 128 }}
              margin="normal"
              fullWidth
            />

            <TextField
              error={touched.postal_code ? Boolean(errors.postal_code) : false}
              label="Postal Code"
              placeholder="A1B2C3"
              name="postal_code"
              value={values.postal_code}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                errors.postal_code && touched.postal_code && errors.postal_code
              }
              margin="normal"
              inputProps={{ maxLength: 6 }}
              fullWidth
            />
          </form>
        );
      }}
    </Formik>
  );
}
