import { Box, Fade } from "@mui/material";
import React from "react";
import { ImageWrapper } from "./layout.styles";
import bg from "../../assets/bg.jpg";

const Image = () => {
  return (
    <ImageWrapper>
      <Fade in={true} timeout={2000}>
        <Box className="image">
          <img className="img" src={bg} alt="bg" />
          <div className="cover"></div>
        </Box>
      </Fade>
    </ImageWrapper>
  );
};

export default Image;
