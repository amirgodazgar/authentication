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
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import useSignIn from "../../hooks/auth/useSignIn";
import { Wrapper } from "./sign-in.styles";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setInformation } = useSignIn();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setInformation({ userName, password }, shouldRemember);
  };
  console.log(auth);

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
              Don't have an account?
            </Typography>
            <Typography className="link" variant="overline" gutterBottom>
              <Link onClick={() => navigate("/sign-up")}>Sign up</Link>
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
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box className="forgot-password-box">
            <FormControlLabel
              control={
                <Checkbox
                  checked={shouldRemember}
                  onChange={(e) => setShouldRemember(e.target.checked)}
                />
              }
              label="Remember me"
            />
            <Typography className="link" variant="overline" gutterBottom>
              <Link onClick={() => navigate("/forgot-password")}>
                Forgot password
              </Link>
            </Typography>
          </Box>
          <Button
            onClick={(e) => submitHandler(e)}
            variant="contained"
            className="btn"
          >
            Sign In
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default SignIn;
