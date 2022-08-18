import { Avatar, Box, Button, Fade, Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./welcome.styles";
import profileImg from "../../assets/profile.jpeg";
import useSignOut from "../../hooks/auth/useSignOut";

const Welcome = () => {
  const { setLogout } = useSignOut();

  return (
    <Fade in={true} timeout={2000}>
      <Wrapper>
        <Box className="title-box">
          <Box>
            <Typography variant="h4" gutterBottom>
              Welcome Dwayne!
            </Typography>
          </Box>
          <Box>
            <Typography className="subtitle" variant="overline" gutterBottom>
              to visit new events go to your profile
            </Typography>
          </Box>
        </Box>

        <Box className="profile-container">
          <Avatar
            alt="dwayne johnson"
            src={profileImg}
            sx={{ width: 150, height: 150 }}
            className="avatar"
          />

          <Button
            // onClick={(e) => submitHandler(e)}
            variant="contained"
            className="btn"
          >
            go to profile
          </Button>

          <Button
            onClick={() => setLogout(true)}
            variant="outlined"
            className="btn"
          >
            Sign out
          </Button>
        </Box>
      </Wrapper>
    </Fade>
  );
};

export default Welcome;
