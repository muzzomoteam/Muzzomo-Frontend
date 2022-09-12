import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

import lightenColour from "@utils/colours/lighten-colour";

type Props = {
  displayText: string;
  onClick: (event: React.MouseEvent<unknown>) => void;
  href?: string;
  Icon?: React.ReactNode;
};

const PrimaryButtonComponent = ({ onClick, Icon, displayText }: Props) => (
  <Button
    sx={{
      padding: "12px 20px",
      backgroundColor: "black",
      margin: "10px",
      borderRadius: "60px",
      textTransform: "capitalize",
      fontSize: "1rem",
      color: "white",
      "&:hover": {
        backgroundColor: lightenColour("#000000", 25),
      },
    }}
    onClick={onClick}
  >
    {Icon ?? <div />}
    {displayText}
  </Button>
);

export function PrimaryButton({
  displayText,
  onClick,
  href,
  Icon,
}: Props): JSX.Element {
  return href !== undefined ? (
    <Link href={href}>
      <PrimaryButtonComponent
        onClick={onClick}
        Icon={Icon}
        displayText={displayText}
      />
    </Link>
  ) : (
    <PrimaryButtonComponent
      onClick={onClick}
      Icon={Icon}
      displayText={displayText}
    />
  );
}
