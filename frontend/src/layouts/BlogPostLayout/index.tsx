import * as React from "react";

import Box from "@mui/material/Box";

import Header from "@components/Header/";
import Footer from "@components/Footer/";

const BlogPostLayout: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          p: 2,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogPostLayout;
