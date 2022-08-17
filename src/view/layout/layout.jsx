import React from "react";
import { Box, Fade, Paper } from "@mui/material";
import { Wrapper } from "./styles";
import SignIn from "../sign-in/sign-in";
import Image from "./image";

const Layout = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Wrapper>
        <Paper className="paper" elevation={5}>
          <Box className="field">
            <SignIn />
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
