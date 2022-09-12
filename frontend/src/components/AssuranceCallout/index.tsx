import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MdCheck as CheckmarkIcon } from "react-icons/md";

import { styled } from "@mui/material/styles";

const AssuranceCalloutCard = ({ calloutText }: { calloutText: string }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      my: 1.25,
    }}
  >
    <StyledCheckmarkIcon sx={{ mr: 1 }} />
    <Typography sx={{ fontSize: "1.3rem" }}>{calloutText}</Typography>
  </Box>
);

export default function AssuranceCallout(): JSX.Element {
  return (
    <Grid container sx={{ my: "40px" }} flexDirection="column">
      <Grid item>
        <AssuranceCalloutCard calloutText="No account needed" />
      </Grid>
      <Grid item>
        <AssuranceCalloutCard calloutText="Secure and private" />
      </Grid>
      <Grid item>
        <AssuranceCalloutCard calloutText="Anti-spam" />
      </Grid>
      <Grid item>
        <AssuranceCalloutCard calloutText="Free" />
      </Grid>
    </Grid>
  );
}

const StyledCheckmarkIcon = styled(CheckmarkIcon)`
  font-size: 2.25rem;
  color: #002e33;
`;
