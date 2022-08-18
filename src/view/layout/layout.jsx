import React from "react";
import { Box, Fade, Paper } from "@mui/material";
import { Wrapper } from "./layout.styles";
import Image from "./image";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
import ForgotPassword from "../forgot-password/forgot-password";
import VerificationCode from "../verification/verification-code";
import ResetPassword from "../reset-password/reset-password";

const Layout = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Wrapper>
        <Paper className="paper" elevation={5}>
          <Box className="field">
            
            {/* <SignIn /> */}
            {/* <SignUp /> */}
            {/* <ForgotPassword /> */}
            {/* <VerificationCode /> */}
            <ResetPassword />

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
