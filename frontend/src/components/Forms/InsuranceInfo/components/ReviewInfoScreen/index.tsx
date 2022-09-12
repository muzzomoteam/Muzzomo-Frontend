import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  insurance_type: string;
  first_name: string;
  last_name: string;
  email: string;
  postal_code: string;
};

export default function ReviewInfoScreen({
  insurance_type,
  first_name,
  last_name,
  email,
  postal_code,
}: Props): JSX.Element {
  return (
    <Box>
      <Box sx={{ mb: 1 }}>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "500" }}>
          Insurance Type
        </Typography>
        <Typography sx={{ textTransform: "capitalize", fontSize: "1.1rem" }}>
          {insurance_type}
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "500" }}>
          First name
        </Typography>
        <Typography sx={{ fontSize: "1.1rem" }}>{first_name}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "500" }}>
          Last Name
        </Typography>
        <Typography sx={{ fontSize: "1.1rem" }}>{last_name}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "500" }}>
          Email
        </Typography>
        <Typography sx={{ fontSize: "1.1rem" }}>{email}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "500" }}>
          Postal Code
        </Typography>
        <Typography sx={{ fontSize: "1.1rem" }}>{postal_code}</Typography>
      </Box>
    </Box>
  );
}
