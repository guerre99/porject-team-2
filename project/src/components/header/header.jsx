import React from "react";
import "./styles.css";
import ResponsiveAppBar from "./navbar";
import { Box, Button } from "@mui/material";
import myImage from "../../../../assets/illustration-working.svg";


function Header() {
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ResponsiveAppBar />

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" mb="8%">
          <Box
            gridColumn="span 6"
            sx={{
              mt: '24%',
              ml: '30%',
            }}
          >
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2BD0D0',
                '&:hover': {
                  background: '#bff0f0',
                  boxShadow: 'none',
                },
                borderRadius: '30px',
                padding: '10px 20px',
                mr: '18%',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                boxShadow: 'none',
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box gridColumn="span 6" className="image-container">
            <img
              src={myImage}
              alt="person drawing"
              className="responsive-image"
            />
          </Box>
        </Box>
      </header>
    </>
  )
}

export default Header
