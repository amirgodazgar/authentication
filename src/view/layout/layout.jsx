import React from "react";
import { Box, Fade, Paper } from "@mui/material";
import { Wrapper } from "./layout.styles";
import Image from "./image";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Wrapper>
        <Paper className="paper" elevation={5}>
          <Box className="field">
            <Outlet />
          </Box>
          <Box className="image">
            <Image />
          </Box>
        </Paper>
      </Wrapper>
    </Fade>
  );
};

export default Layout;
