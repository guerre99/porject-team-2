import React from 'react'
// import ButtonAppBar from "./navbar";
import ResponsiveAppBar from './navbar_responsive'
import { Box, Button, ImageList, Grid } from '@mui/material'
import myImage from '../../../../assets/illustration-working.svg'

function Header() {
  return (
    <>
      <header>
        {/* <ButtonAppBar /> */}
        <ResponsiveAppBar />

        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={5}
          mb="8%"
        >
          <Box
            gridColumn="span 8"
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

          <Box>
            <ImageList sx={{ transform: 'translate(20%, 40%)' }}>
              <img src={myImage} alt="hola" width="500px" />
            </ImageList>
          </Box>
        </Box>
      </header>
    </>
  )
}

export default Header
