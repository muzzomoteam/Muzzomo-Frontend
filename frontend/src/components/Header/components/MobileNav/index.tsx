import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";

import { MdClose as MobileNavHeaderIcon } from "react-icons/md";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";

interface Props {
  openMobileNav: boolean;
  onHandleClickMenuItem: () => void;
  pages: { title: string; link: string }[];
}

export default function MobileNav({
  openMobileNav,
  onHandleClickMenuItem,
  pages,
}: Props): JSX.Element {
  return (
    <Drawer
      anchor={"top"}
      open={openMobileNav}
      onClose={onHandleClickMenuItem}
      elevation={0}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ pb: 3, height: "100vh", backgroundColor: " #002e33" }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", alignItems: "center", margin: "10px 0" }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onHandleClickMenuItem}
            style={{
              zIndex: "1000",
              backgroundColor: "#d9f6ef",
              color: "#002e33",
              padding: "10px",
            }}
          >
            <MobileNavHeaderIcon style={{ fontSize: "2rem" }} />
          </IconButton>

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
        </Toolbar>
        <Box
          sx={{
            height: "calc(100% - 100px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mt: "50px" }}>
            {pages.map((page) => (
              <Link href={page.link}>
                <MenuItem
                  key={page.title}
                  onClick={onHandleClickMenuItem}
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "#d9f6ef",
                      display: "block",
                      fontWeight: "600",
                      fontSize: "2.5rem",
                      textTransform: "none",
                      textOverflow: "wrap",
                    }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Box>
          <Box>
            <Typography sx={{ color: "#d9f6ef", textAlign: "center" }}>
              Copyright Muzzomo Inc. {new Date().getFullYear()}
            </Typography>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={4}
              sx={{ mt: -1 }}
            >
              <Grid
                item
                sx={{
                  cursor: "pointer",
                }}
              >
                <Link href="https://www.instagram.com/muzzomo/">
                  <InstagramIcon
                    style={{
                      color: "#d9f6ef",
                      height: "28px",
                      width: "28px",
                    }}
                  />
                </Link>
              </Grid>
              <Grid
                item
                sx={{
                  cursor: "pointer",
                }}
              >
                <Link href="mailto:muzzomohelp@gmail.com">
                  <EmailIcon
                    style={{
                      color: "#d9f6ef",
                      height: "30px",
                      width: "30px",
                    }}
                  />
                </Link>
              </Grid>
              <Grid
                item
                sx={{
                  cursor: "pointer",
                }}
              >
                <Link href="https://twitter.com/muzzomo">
                  <TwitterIcon
                    style={{
                      color: "#d9f6ef",
                      height: "28px",
                      width: "28px",
                    }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Drawer>
  );
}
