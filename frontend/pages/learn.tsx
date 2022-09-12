import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { GetStaticProps } from "next";
import { getAllPosts } from "@utils/blog/content";
import { BlogGallery, IBlogGalleryProps } from "@components/BlogPostsList";

import MainLayout from "@layouts/MainLayout";
import SEO from "@components/SEO";

// Based blog off https://github.com/ixartz/Next-js-Blog-Boilerplate

// TODO

export default function LearnPage(props: IBlogGalleryProps): JSX.Element {
  return (
    <MainLayout>
      <SEO
        pageTitle="Muzzomo - Learn"
        metaDescription="Understanding insurance shouldn't be difficult. We break down concepts and advice into understandable chunks so you can make the right decision independently for yourself."
      />
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ mt: 0 }}
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
            Learn
          </Typography>
        </Grid>

        <BlogGallery posts={props.posts} />
      </Grid>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(["title", "date", "slug", "image"]);
  return {
    props: {
      posts,
    },
  };
};
