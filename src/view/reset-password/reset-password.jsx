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
import { Wrapper } from "./reset-password.styles";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <Fade in={true} timeout={2000}>
      <Wrapper>
        <Box className="title-box">
          <Box>
            <Typography variant="h4" gutterBottom>
              Reset password
            </Typography>
          </Box>
          <Box>
            <Typography className="subtitle" variant="body2" gutterBottom>
              Please enter a new password
            </Typography>
          </Box>
        </Box>

        <FormGroup className="form">
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
            <InputLabel htmlFor="password">Confirm password</InputLabel>
            <OutlinedInput
              id="password"
              label="Confirm password"
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

          <Button
            // onClick={(e) => submitHandler(e)}
            variant="contained"
            className="btn"
          >
            Save
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default ResetPassword;
