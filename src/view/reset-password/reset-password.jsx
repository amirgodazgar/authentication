import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormGroup,
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
import useResetPassword from "../../hooks/auth/useResetPassword";
import { Wrapper } from "./reset-password.styles";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { setInformation } = useResetPassword();

  const checkEmpty = (...arg) => {
    arg.map((i) => {
      if (i === "") setIsEmpty(true);
      else setIsEmpty(false);
    });
  };

  const submitHandler = () => {
    checkEmpty(password, confirmPassword);

    if (!isEmpty) setInformation({ password, confirmPassword });
    else return;
  };

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
              error={isEmpty}
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
              error={isEmpty}
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

          <Button
            onClick={(e) => submitHandler(e)}
            variant="contained"
            className="btn"
          >
            Confirm
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default ResetPassword;
