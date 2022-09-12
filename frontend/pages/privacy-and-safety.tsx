import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import MainLayout from "@layouts/MainLayout";
import SEO from "@components/SEO";

export default function PrivacyAndSafetyPage(): JSX.Element {
  return (
    <MainLayout>
      <SEO
        pageTitle="Muzzomo - Privacy and Safety"
        metaDescription="Our mission is to make it easy to get the insurance you need without any of the fluff or difficulties. This is how we keep your information private and safe."
      />
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ mt: 6 }}
        maxWidth="lg"
      >
        <Grid item>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: {
                lg: "4.5rem",
                sm: "3.5rem",
              },
              textDecoration: "none",
              my: 4,
            }}
          >
            Privacy and Safety
          </Typography>
        </Grid>

        <Grid item sx={{ width: "100%", p: { fontSize: "1.2rem" } }}>
          <p>
            Our mission is to make it easy to get the insurance you need without
            any of the fluff or difficulties.
          </p>

          <p>
            You shouldn't have to worry about getting ripped off, or if you're
            not getting the best deal. Our licensed advisors are here to help
            and take all the complications out of insurance for you.
          </p>

          <p>
            All you need to do is tell us the type of insurance you need and one
            of our advisors will contact you to get more details.
          </p>

          <p>
            <strong>We will never spam you or sell your information</strong>
          </p>

          <p>
            So if we don't sell your information, how do we make money? Easy. We
            get a very small comission from our advisors when you purchase your
            insurance.
          </p>

          <br></br>

          <p>
            You can read our full privacy policy{" "}
            <a href="/privacy" style={{ color: "#002e33" }}>
              here
            </a>
          </p>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
