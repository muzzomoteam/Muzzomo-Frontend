import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Home, LargeSuitcase, CarOutline, Heart } from "iconoir-react";

import { trackInsuranceTypeSelected } from "@analytics/tracking";

type Props = {
  onInsuranceTypeSelected: (insuranceType: string) => void;
};

enum InsuranceType {
  Home = "home",
  Auto = "auto",
  Life = "life",
  Business = "business",
}

type InsuranceOption = {
  title: string;
  type: InsuranceType;
  imageIconComponent: JSX.Element;
};

const imageIconWidth = 34;
const imageIconHeight = 34;

const insuranceTypes: InsuranceOption[] = [
  {
    title: "Life",
    type: InsuranceType.Life,
    imageIconComponent: (
      <Heart height={imageIconHeight} width={imageIconWidth} />
    ),
  },
  {
    title: "Home",
    type: InsuranceType.Home,
    imageIconComponent: (
      <Home height={imageIconHeight} width={imageIconWidth} />
    ),
  },
  {
    title: "Auto",
    type: InsuranceType.Auto,
    imageIconComponent: (
      <CarOutline height={imageIconHeight} width={imageIconWidth} />
    ),
  },

  {
    title: "Business",
    type: InsuranceType.Business,
    imageIconComponent: (
      <LargeSuitcase height={imageIconHeight} width={imageIconWidth} />
    ),
  },
];

export default function InsuranceInfoForm({
  onInsuranceTypeSelected,
}: Props): JSX.Element {
  const handleInsuranceTypeSelected = (insuranceType: InsuranceType) => {
    onInsuranceTypeSelected(insuranceType);
    trackInsuranceTypeSelected(insuranceType);
  };

  return (
    <Grid
      container
      sx={{
        pt: "60px",
        px: 1,
      }}
      flexDirection="column"
      justifyContent="center"
    >
      {insuranceTypes.map((insuranceOption: InsuranceOption) => (
        <Grid item>
          <InsuranceTypeCard
            cardTitle={insuranceOption.title}
            cardImageIcon={insuranceOption.imageIconComponent}
            onClick={() => handleInsuranceTypeSelected(insuranceOption.type)}
          />
        </Grid>
      ))}
      {/* <Grid item>
        <InsuranceTypeCard
          cardTitle="Home"
          cardImageIcon={<Home height={36} width={36} />}
          onClick={() => handleInsuranceTypeSelected(InsuranceType.Home)}
        />
      </Grid>
      <Grid item>
        <InsuranceTypeCard
          cardTitle="Life"
          cardImageIcon={<Heart height={36} width={36} />}
          onClick={() => handleInsuranceTypeSelected(InsuranceType.Life)}
        />
      </Grid>
      <Grid item>
        <InsuranceTypeCard
          cardTitle="Auto"
          cardImageIcon={<CarOutline height={36} width={36} />}
          onClick={() => handleInsuranceTypeSelected(InsuranceType.Auto)}
        />
      </Grid>
      <Grid item>
        <InsuranceTypeCard
          cardTitle="Business"
          cardImageIcon={<LargeSuitcase height={36} width={36} />}
          onClick={() => handleInsuranceTypeSelected(InsuranceType.Life)}
        />
      </Grid> */}
    </Grid>
  );
}

const InsuranceTypeCard = ({
  cardTitle,
  onClick,
  cardImageIcon,
}: {
  cardTitle: string;
  cardImageIcon: JSX.Element;
  onClick: () => void;
}) => (
  <Box
    sx={{
      my: 1,
      py: 1.5,
      px: 3,
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.6)",
      transition: "opacity .6s cubic-bezier(.19,1,.22,1)",
      boxShadow: "0 5px 20px 5px rgba(0,0,0,0.02)",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgb(0, 46, 51)",
        "*": {
          color: "rgb(217, 246, 239)",
        },
      },
    }}
    onClick={onClick}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#002e33",
      }}
    >
      {cardImageIcon}
      <Typography
        sx={{
          fontSize: "1.75rem",
          fontWeight: "500",
          ml: "10px",
          color: "#002e33",
        }}
      >
        {cardTitle}
      </Typography>
    </Box>
  </Box>
);
