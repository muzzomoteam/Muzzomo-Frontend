import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import MainLayout from "@layouts/MainLayout";
import SEO from "@components/SEO";
import InsuranceInfoForm from "@components/Forms/InsuranceInfo";
import AssuranceCallout from "@components/AssuranceCallout";

export default function IndexPage(): JSX.Element {
  return (
    <MainLayout>
      <SEO
        pageTitle="Muzzomo - Connecting you with accredited insurance adivsors"
        metaDescription="Muzzomo makes it easy for you to get affordable insurance rates and advice by automatically connecting you with licensed insurance advisors."
      />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 6 }}
        maxWidth="xl"
      >
        <Grid item md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: {
                lg: "5rem",
                sm: "4.5rem",
              },
              textDecoration: "none",
            }}
          >
            Get affordable insurance rates and advice with ease
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              textDecoration: "none",
              mt: 3,
              fontSize: "1.7rem",
            }}
          >
            We automatically connect you with accredited insurance advisors
          </Typography>
          <AssuranceCallout />
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            backgroundColor: "rgb(249, 251, 250)",
            borderRadius: "10px",
            animation: "floating 3s ease-in-out infinite",
            "@keyframes floating": {
              "0%": {
                transform: "translate(0,  0px)",
              },
              "50%": {
                transform: "translate(0,  5px)",
              },
              "100%": {
                transform: "translate(0, -0px)",
              },
            },
          }}
        >
          <InsuranceInfoForm />
        </Grid>
      </Grid>
    </MainLayout>
  );
}
