import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Link from "next/link";

import moment from "moment";

import { PostItems } from "@utils/blog/content";

export type IBlogGalleryProps = {
  posts: PostItems[];
};

const BlogPostCard = ({
  title,
  imagePath,
  date,
  slug,
}: {
  title: string;
  imagePath: string;
  date: string;
  slug: string;
}) => (
  <Link href={`/learn/${slug}`} passHref>
    <Grid item xs={12} md={6} sx={{}}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          cursor: "pointer",
          border: "1.15px solid transparent",
          "&:hover": { border: "1.15px solid #002e33" },
        }}
      >
        <Image
          src={imagePath}
          layout="responsive"
          width={500}
          height={300}
          objectFit="cover"
          style={{ borderRadius: "6px" }}
        />
        <Typography sx={{ fontSize: "1.5rem", mt: 1, fontWeight: "medium" }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "1.15rem", color: "rgb(91, 97, 110)" }}>
          {moment(date).format("MMMM D, YYYY")}
        </Typography>
      </Box>
    </Grid>
  </Link>
);

const BlogGallery = (props: IBlogGalleryProps) => (
  <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {props.posts.map((elt) => (
      <BlogPostCard
        title={elt.title}
        imagePath={elt.image}
        date={elt.date}
        slug={elt.slug}
        key={elt.slug}
      />
    ))}
  </Grid>
);

export { BlogGallery };
