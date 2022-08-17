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
import { Wrapper } from "./styles";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

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
              <Link>Sign up</Link>
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
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((prev) => !prev)}
                    // onMouseDown={handleMouseDownPassword}
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
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <Typography className="link" variant="overline" gutterBottom>
              <Link>Forgot password</Link>
            </Typography>
          </Box>
          <Button variant="contained" className="btn">
            Sign In
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default SignIn;
