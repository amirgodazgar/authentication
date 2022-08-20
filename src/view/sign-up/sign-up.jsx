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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const { setInformation } = useSignUp();

  const validation = (pass, confirmPass) => {
    return pass === confirmPass ? setIsInvalid(false) : setIsInvalid(true);
  };

  const checkEmpty = (...arg) => {
    arg.map((i) => {
      if (i === "") setIsEmpty(true);
      else setIsEmpty(false);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validation(password, confirmPassword);
    checkEmpty(userName, password, confirmPassword);

    if (!isInvalid && !isEmpty) setInformation({ userName, password });
    else return;
  };

  return (
    <Fade in={true} timeout={2000}>
      <Wrapper>
        <Box className="title-box">
          <Box>
            <Typography variant="h4" gutterBottom>
              Sign up with your email
            </Typography>
          </Box>
          <Box>
            <Typography className="subtitle" variant="overline" gutterBottom>
              Already have an account?
            </Typography>
            <Typography className="link" variant="overline" gutterBottom>
              <Link>Sign in</Link>
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

          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              error={isEmpty || isInvalid}
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
            <InputLabel htmlFor="password">Confirm password</InputLabel>
            <OutlinedInput
              error={isEmpty || isInvalid}
              id="password"
              label="Confirm password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box className="agreement-box">
            <FormControlLabel control={<Checkbox defaultChecked />} />
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
            Create an Account
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default SignUp;
