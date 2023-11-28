import { Grid, Typography } from '@mui/material'
import React from 'react'
import icon1 from './assets/icon-brand-recognition.svg'
import icon2 from './assets/icon-detailed-records.svg'
import icon3 from './assets/icon-fully-customizable.svg'
import Box from '@mui/material/Box'

function Middlebody() {
  return (
    <Grid>
      <Grid
        container
        justifyContent='center'
        sx={{ color: '#34313D', fontWeight: 700 }}
      >
        <div>
          <Typography variant='h3' sx={{ fontWeight: 700 }}>
            Advanced Statistics
          </Typography>
        </div>
      </Grid>
      <Grid
        container
        justifyContent='center'
        sx={{
          color: '#9E9AA8',
          padding: '0 20%',
          width: '100%',
          position: 'flex',
          textAlign: 'center',

          textDecoration: 'none',
        }}
      >
        <Typography variant='p' sx={{ fontWeight: 500 }}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
      </Grid>
      <Grid container justifyContent={'space-between'} xs={12} md={1}>
        <Box>
          <img src={icon1} alt='Icon1' />
          <Typography>lkñajsdhfkljahs</Typography>
        </Box>
        <Box>
          <img src={icon2} />
          <Typography>lkñajsdhfkljahs</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <img src={icon3} />
          <Typography>lkñajsdhfkljahs</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Middlebody
