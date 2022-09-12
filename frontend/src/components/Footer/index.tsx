import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Link from "next/link";

import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";

const footerLinks = [
  { title: "Learn", link: "/learn" },
  { title: "Privacy", link: "/privacy" },
  { title: "Terms", link: "/terms" },
];

export default function Footer(): JSX.Element {
  return (
    <Container maxWidth="xl" sx={{ mt: "40px", pb: "40px" }}>
      <Grid container justifyContent="space-between">
        <Grid container spacing={4} sx={{ mt: 0 }} alignItems="center">
          <Grid
            item
            sx={{
              cursor: "pointer",
            }}
          >
            <Link href="https://www.instagram.com/muzzomo/">
              <InstagramIcon
                style={{
                  color: "#002e33",
                  height: "25px",
                  width: "25px",
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
                  color: "#002e33",
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
            <Link href="https://twitter.com/muzzomo">
              <TwitterIcon
                style={{
                  color: "#002e33",
                  height: "25px",
                  width: "25px",
                }}
              />
            </Link>
          </Grid>
        </Grid>
        <Typography
          sx={{
            color: "#002e33",
            textAlign: "center",
            mt: 1,
            fontSize: "0.95rem",
          }}
        >
          Copyright Muzzomo Inc. {new Date().getFullYear()}
        </Typography>

        <Grid
          item
          sx={{
            ml: { xs: 0, lg: 4 },
            mt: { xs: 4, lg: 0 },
            display: "flex",
            height: "min-content",
          }}
        >
          {footerLinks.map((page) => (
            <Link key={page.title} href={page.link}>
              <Typography
                sx={{
                  minWidth: "auto",
                  ml: { xs: 0, lg: 4 },
                  mr: { xs: 5, lg: 0 },
                  color: "#002e33;",
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
        </Grid>
      </Grid>
    </Container>
  );
}
