import React, { useEffect, useState } from "react";
import {
  FormGroup,
  TextField,
  Box,
  FormControl,
  Typography,
  Button,
  Fade,
} from "@mui/material";

import { Wrapper } from "./verification-code.styles";

const VerificationCode = () => {
  const [isTimeOn, setIsTimeOn] = useState(true);
  const [timer, setTimer] = useState(1);
  const [verifyCode, setVerifyCode] = useState("");

  useEffect(() => {
    let interval = null;
    if (isTimeOn) {
      interval = setInterval(() => {
        return setTimer((prevTime) => {
          if (prevTime === 30) {
            setIsTimeOn(false);
            setTimer(1);
          }
          return prevTime + 1;
        });
      }, 1000);
    } else if (!isTimeOn && timer === 30) {
      clearInterval(interval);
    }

    return () => clearInterval(interval, 1000);
  }, [isTimeOn, timer]);

  return (
    <Fade in={true} timeout={2000}>
      <Wrapper>
        <Box className="title-box">
          <Box>
            <Typography variant="h4" gutterBottom>
              Did you get the code?
            </Typography>
          </Box>
          <Box>
            <Typography className="subtitle" variant="body2" gutterBottom>
              Enter the verification code sent to your email or phone
            </Typography>
          </Box>
        </Box>

        <FormGroup className="form">
          <FormControl>
            <TextField
              label="Verification Code"
              variant="outlined"
              fullWidth
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
            />
          </FormControl>

          <Button
            // onClick={(e) => submitHandler(e)}
            variant="contained"
            className="btn"
          >
            Verify code
          </Button>
          <Button
            disabled={isTimeOn}
            variant="outlined"
            className="btn"
            onClick={() => setIsTimeOn(true)}
          >
            {isTimeOn ? `Resend Code : ${30 - timer} sec` : "Resend Code"}
          </Button>
        </FormGroup>
      </Wrapper>
    </Fade>
  );
};

export default VerificationCode;
