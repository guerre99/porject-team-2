import React from "react";
import ButtonAppBar from "./navbar";
import { Box, Button, ImageList } from "@mui/material";
import myImage from "../../../../assets/illustration-working.svg";

function Header() {
  return (
    <>
      <ButtonAppBar />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="20%" ml={15}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button size="small">Get started</Button>
        </Box>

        <Box>
          <ImageList>
            <img src={myImage} alt="hola" />
          </ImageList>
        </Box>
      </Box>
    </>
  );
}

export default Header;
