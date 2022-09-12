import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { GetStaticPaths, GetStaticProps } from "next";
import moment from "moment";

import { getAllPosts, getPostBySlug } from "@utils/blog/content";
import { markdownToHtml } from "@utils/blog/markdown";

import BlogPostLayout from "@layouts/BlogPostLayout";

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
};

const DisplayPost = (props: IPostProps) => (
  <BlogPostLayout>
    <Box
      sx={{
        maxWidth: "1000px",
      }}
    >
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
          mb: 1,
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          fontSize: "1.25rem",
          textDecoration: "none",
          mb: 6,
        }}
      >
        {moment(props.date).format("MMMM D, YYYY")}
      </Typography>

      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </Box>
  </BlogPostLayout>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug, [
    "title",
    "description",
    "date",
    "modified_date",
    "image",
    "content",
    "slug",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      content,
    },
  };
};

export default DisplayPost;
