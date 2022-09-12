import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckCircledOutline } from "iconoir-react";

import axios from "axios";

import { trackContactInfoSubmission } from "@analytics/tracking";

import {
  initialFormFieldValues,
  FormFields,
} from "@components/Forms/InsuranceInfo/components/ContactInfo/schema";

import ContactInfoForm from "@components/Forms/InsuranceInfo/components/ContactInfo";
import ReviewInfoScreen from "@components/Forms/InsuranceInfo/components/ReviewInfoScreen";
import InsuranceTypeSelector from "@components/Forms/InsuranceInfo/components/InsuranceTypeSelector";

export default function InsuranceInfoForm(): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isValidForm, setIsValidForm] = React.useState(false);
  const [insuranceType, setInsuranceType] = React.useState("");
  const [stepTitle, setStepTitle] = React.useState(
    "What type insurance are you looking for?"
  );
  const [formFieldValues, setFormFieldValues] = React.useState(
    initialFormFieldValues
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    updateStepTitle(activeStep + 1);

    if (activeStep === 2) {
      const { first_name, last_name, email, postal_code } = formFieldValues;

      trackContactInfoSubmission({
        insurance_type: insuranceType,
        first_name,
        last_name,
        email,
        postal_code,
      });

      // Make API call to BE to send user info
      try {
        axios.post("https://backend-fghr3e2zqa-pd.a.run.app/add-client", {
          insuranceType: insuranceType,
          firstName: first_name,
          lastName: last_name,
          email: email,
          postalCode: postal_code,
          dateOfBirth: "1/1/1990",
        });
      } catch (e) {
        return;
      }
    }
  };

  const updateStepTitle = (stepNumber: number) => {
    switch (stepNumber) {
      case 0:
        setStepTitle("What type of insurance are you looking for?");
        break;
      case 1:
        setStepTitle("We need some information from you");
        break;
      case 2:
        setStepTitle("Review your information");
        break;
      case 3:
        // Explicitly no title
        setStepTitle("");
        break;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
    updateStepTitle(activeStep - 1);
  };

  const handleInsuranceTypeSelected = (insuranceType: string) => {
    setInsuranceType(insuranceType);
    handleNext();
  };

  const setButtonTitle = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return "Next";
      case 2:
        return "Submit";
      default:
        return "Next";
    }
  };

  return (
    <Box
      sx={{
        px: "30px",
        py: "60px",
        height: "inherit",
        boxShadow: "0 20px 30px 0px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            textDecoration: "none",
            textAlign: "center",
            color: "#002e33",
            letterSpacing: "-0.5px",
            fontSize: "1.75rem",
          }}
        >
          {stepTitle}
        </Typography>
      </Box>
      {(activeStep === 0 && (
        <InsuranceTypeSelector
          onInsuranceTypeSelected={(insuranceType: string) => {
            handleInsuranceTypeSelected(insuranceType);
          }}
        />
      )) ||
        (activeStep === 1 && (
          <ContactInfoForm
            initialFormFieldValues={formFieldValues}
            isValidForm={isValidForm}
            onValidFromContent={(values, isValid) => {
              // Saves previous form input values
              setFormFieldValues(values as FormFields);
              setIsValidForm(isValid);
            }}
            style={{
              width: "inherit",
            }}
          />
        )) ||
        (activeStep === 2 && (
          <Box
            sx={{
              mt: 3,
            }}
          >
            <ReviewInfoScreen
              insurance_type={insuranceType}
              first_name={formFieldValues.first_name}
              last_name={formFieldValues.last_name}
              email={formFieldValues.email}
              postal_code={formFieldValues.postal_code}
            />
          </Box>
        )) ||
        (activeStep === 3 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              px: 3,
            }}
          >
            <CheckCircledOutline
              style={{ marginBottom: "50px", color: "#0B454C" }}
              height={80}
              width={80}
            />
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Thanks! An insurance advisor will reach out to you in the next 48
              hours
            </Typography>
          </Box>
        ))}
      {activeStep !== 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            pt: 2.5,
          }}
        >
          {activeStep !== 3 && activeStep !== 0 && (
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                padding: "12px 36px",
                minWidth: "140px",
                backgroundColor: "rgb(0, 46, 51)",
                margin: "10px",
                borderRadius: "60px",
                textTransform: "capitalize",
                fontSize: "1rem",
                color: "white",
                "&:hover": {
                  color: "rgb(217, 246, 239)",
                  backgroundColor: "#002428",
                },
              }}
            >
              Back
            </Button>
          )}
          {activeStep !== 0 && activeStep !== 3 && (
            <Button
              onClick={handleNext}
              disabled={!isValidForm}
              sx={{
                padding: "12px 36px",
                backgroundColor: "rgb(0, 46, 51)",
                margin: "10px",
                minWidth: "140px",
                borderRadius: "60px",
                textTransform: "capitalize",
                fontSize: "1rem",
                color: "white",
                "&:hover": {
                  color: "rgb(217, 246, 239)",
                  backgroundColor: "#002428",
                },
                "&:disabled": {
                  backgroundColor: "rgb(210, 231, 226)",
                },
              }}
            >
              {setButtonTitle(activeStep)}
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}
