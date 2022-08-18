import React from "react";
import { Box, Fade, Paper } from "@mui/material";
import { Wrapper } from "./layout.styles";
import SignIn from "../sign-in/sign-in";
import Image from "./image";
import SignUp from "../sign-up/sign-up";

const Layout = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Wrapper>
        <Paper className="paper" elevation={5}>
          <Box className="field">
            {/* <SignIn /> */}
            <SignUp />
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
