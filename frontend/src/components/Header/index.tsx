import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import { MdOutlineMoreHoriz as MobileNavHeaderIcon } from "react-icons/md";

import Link from "next/link";

import MobileNav from "./components/MobileNav";

const mobileNavPages = [
  { title: "Homepage", link: "/" },
  { title: "Learn", link: "/learn" },
  { title: "Privacy and Safety", link: "/privacy-and-safety" },
];

const desktopNavPages = [
  { title: "Learn", link: "/learn" },
  { title: "Privacy and Safety", link: "/privacy-and-safety" },
];

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundColor: "#002e33",
            boxShadow: "1px 1px 3px 0 #7cc1b2",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              color: "#d9f6ef",
            }}
          >
            <Toolbar disableGutters>
              <Link href="/" passHref>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 600,
                    fontSize: "1.75rem",
                    color: "#d9f6ef",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  muzzomo.
                </Typography>
              </Link>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  margin: "10px 0",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  style={{
                    zIndex: "1000",
                    backgroundColor: "#d9f6ef",
                    color: "#002e33",
                    padding: "10px",
                  }}
                >
                  <MobileNavHeaderIcon style={{ fontSize: "2rem" }} />
                </IconButton>
                <MobileNav
                  onHandleClickMenuItem={handleCloseNavMenu}
                  openMobileNav={Boolean(anchorElNav)}
                  pages={mobileNavPages}
                />
              </Box>

              <Link href="/" passHref>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    ml: 3,
                    display: { xs: "flex", md: "none" },
                    fontWeight: 600,
                    fontSize: "1.75rem",
                    color: "#d9f6ef",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  muzzomo.
                </Typography>
              </Link>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "flex-end",
                  },
                }}
              >
                {desktopNavPages.map((page) => (
                  <Link
                    key={page.title}
                    href={page.link}
                    onClick={handleCloseNavMenu}
                    passHref
                  >
                    <Typography
                      sx={{
                        minWidth: "auto",
                        my: 1,
                        ml: 2,
                        color: "#d9f6ef",
                        display: "block",
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
