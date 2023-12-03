import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography, Button } from '@mui/material'
import FooterLinks from './FooterLinks'
import backgroundImage from './assets/bg-boost-desktop.svg'

function Footer() {
  return (
    <footer>
      <div>
        <Grid container justifyContent='center'>
          <Grid
            item
            sx={{
              position: 'relative',
              backgroundColor: '#3A3054',
              textAlign: 'center',
              width: '100%',
              minHeight: '30vh',
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                color: '#ffffff',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
              }}
              style={{
                weight: 700,
                fontSize: '40px',
                lineHeight: '48px',
                letter: '-1',
                alignItems: 'center',
                '@media (maxWidth: 500px)': {
                  transform: 'rotate(0deg)',
                  weight: '700',
                  width: '303px',
                  height: '48px',
                  left: '1px',
                  alignContent: 'center',
                  fontSize: '28px',
                  lineHeight: '48px',
                },
              }}
            >
              Boost your links today
            </Typography>
            <Button
              variant='contained'
              sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                padding: '10px 20px',
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, 0)',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 'bold',
                backgroundColor: {
                  '&:hover': {
                    boxShadow: 'none',
                    color: '#FFFFFF',
                    backgroundColor: '#9AE3E3',
                  },
                },
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </div>
      <FooterLinks />
    </footer>
  )
}

export default Footer
