import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        pt: 6,

        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <AppBar
        sx={{
          borderRadius: 10,
          backgroundColor: 'transparent',
          pt: 5,
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ ml: '13%' }}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold' }}
          >
            Shortly
          </Typography>

          <Button
            sx={{
              color: 'gray',
              '&:hover': {
                color: 'black',
              },
              position: 'absolute',
              transform: 'translate(200%, 0)',
              fontFamily: 'Poppins',
            }}
          >
            Features
          </Button>
          <Button
            sx={{
              color: 'gray',
              '&:hover': {
                color: 'black',
              },
              position: 'absolute',
              transform: 'translate(400%, 0)',
              fontFamily: 'Poppins',
            }}
          >
            Pricing
          </Button>
          <Button
            sx={{
              color: 'gray',
              '&:hover': {
                color: 'black',
              },
              position: 'absolute',
              transform: 'translate(410%, 0)',
              fontFamily: 'Poppins',
            }}
          >
            Resources
          </Button>
          <Button
            sx={{
              color: 'gray',
              '&:hover': {
                color: 'black',
              },
              mr: '3%',
              fontFamily: 'Poppins',
            }}
          >
            Log In
          </Button>
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
            Sign Up
          </Button>
        </Toolbar>
        <IconButton />
      </AppBar>
    </Box>
  )
}
