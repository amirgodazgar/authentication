import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Box,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Typography,
  Button,
  Fade,
} from "@mui/material";
import React, { useState } from "react";
import useSignUp from "../../hooks/auth/useSignUp";
import { Wrapper } from "./sign-up.styles";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const { setInformation } = useSignUp();

  const submitHandler = (e) => {
    e.preventDefault();
    setInformation({ userName, password });
    console.log(userName, password, resetPassword);
  };

  return (
    <Fade in={true} timeout={2000}>
      <Wrapper>
        <Box className="title-box">
          <Box>
            <Typography variant="h4" gutterBottom>
              Sign in with your email
            </Typography>
          </Box>
          <Box>
            <Typography className="subtitle" variant="overline" gutterBottom>
              Do you have an account?
            </Typography>
            <Typography className="link" variant="overline" gutterBottom>
              <Link>Sign in</Link>
            </Typography>
          </Box>
        </Box>

        <FormGroup className="form">
          <FormControl>
            <TextField
              id="username"
              label="Email address"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Repeat password</InputLabel>
            <OutlinedInput
              id="password"
              label="Repeat password"
              variant="outlined"
              fullWidth
              value={resetPassword}
              onChange={(e) => setResetPassword(e.target.value)}
              type={showResetPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowResetPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showResetPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box className="agreement-box">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              //   label="Remember me"
            />
            <Box className="agreement-text-box">
              <Typography variant="body1" mr={1}>
                I agree to
              </Typography>
              <Typography
                className="link"
                color={"primary"}
                variant="subtitle1"
                mr={1}
              >
                Terms Of Service
              </Typography>
              <Typography variant="body1" mr={1}>
                and
              </Typography>
              <Typography
                className="link"
                color={"primary"}
                variant="subtitle1"
              >
                Privacy Policy
              </Typography>
            </Box>
          </Box>

          <Button
            onClick={(e) => submitHandler(e)}
            variant="contained"
            className="btn"
          >
            Create an account
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default SignUp;
