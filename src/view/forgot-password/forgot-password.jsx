import {
  FormGroup,
  TextField,
  Box,
  FormControl,
  Typography,
  Button,
  Fade,
} from "@mui/material";
import React, { useState } from "react";
import useForgotPassword from "../../hooks/auth/useForgotPassword";
import { Wrapper } from "./forgot-password.styles";

const ForgotPassword = () => {
  const [userName, setUserName] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const { setInformation } = useForgotPassword();

  const checkEmpty = (...arg) => {
    arg.map((i) => {
      if (i === "") setIsEmpty(true);
      else setIsEmpty(false);
    });
  };

  const submitHandler = () => {
    checkEmpty(userName);

    if (!isEmpty) setInformation({ userName });
    else return;
  };

  return (
    <Fade in={true} timeout={2000}>
      <Wrapper>
        <Box className="title-box">
          <Box>
            <Typography variant="h4" gutterBottom>
              Have trouble signing in ?
            </Typography>
          </Box>
          <Box>
            <Typography className="subtitle" variant="body2" gutterBottom>
              Enter your email or phone number to get the verification code
            </Typography>
          </Box>
        </Box>

        <FormGroup className="form">
          <FormControl>
            <TextField
              error={isEmpty}
              id="username"
              label="Email address"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>

          <Button
            onClick={(e) => submitHandler(e)}
            variant="contained"
            className="btn"
          >
            Get code
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default ForgotPassword;
