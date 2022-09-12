import * as React from "react";

import Box from "@mui/material/Box";

import Header from "@components/Header/";
import Footer from "@components/Footer/";

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box
        component="main"
        sx={{
          p: 2,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
