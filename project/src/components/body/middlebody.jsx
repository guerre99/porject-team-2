import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import icon1 from './assets/icon-brand-recognition.svg'
import icon2 from './assets/icon-detailed-records.svg'
import icon3 from './assets/icon-fully-customizable.svg'
import barra from './assets/Rectangle.png'

function Middlebody() {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ padding: '20px', textAlign: 'center', position: 'relative' }}
    >
      <Grid item container justifyContent='center'>
        <Typography
          variant='h3'
          sx={{ fontWeight: 700, color: '#34313D', textAlign: 'center' }}
        >
          Advanced Statistics
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent='center'
        sx={{
          color: '#9E9AA8',
          padding: '0 16px',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        <Typography
          variant='p'
          sx={{
            fontWeight: 500,
            fontStyle: 'normal',
            letterSpacing: '0.423px',
            fontSize: '20px',
            lineHeight: '32px',
            marginBottom: '35px',
            // border: '5px solid darkblue',
            height: '80px',
            width: '600px',
          }}
        >
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{ marginTop: '20px', position: 'relative', zIndex: 2 }}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'lef',
              textAlign: 'left',
              borderRadius: '5px',
              height: '90%',
              background: '#FFF',
              padding: '20px',
              marginBottom: '30px',
              position: 'relative',
              zIndex: 2,
              '@media (max-width: 500px)': {
                alignItems: 'center',
                textAlign: 'center',
              },
            }}
          >
            <Typography component='div'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='88'
                height='88'
                viewBox='0 0 88 88'
                fill='none'
              >
                <circle cx='44' cy='44' r='44' fill='#3A3054' />

                <image href={icon1} x='20' y='20' width='48' height='48' />
              </svg>
              <h2>Brand Recognition</h2>
              <p
                style={{
                  color: '#9E9AA8',
                  weight: 500,
                  fontSize: '15px',
                  lineHeight: '26px',
                }}
              >
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instill confidence in
                your content.
              </p>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'lef',
              textAlign: 'left',
              borderRadius: '5px',
              height: '90%',
              background: '#FFF',
              padding: '20px',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 2,
              '@media (max-width: 500px)': {
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px ',
                marginTop: '15%',
              },
            }}
          >
            <Typography component='div'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='88'
                height='88'
                viewBox='0 0 88 88'
                fill='none'
              >
                <circle cx='44' cy='44' r='44' fill='#3A3054' />
                <image href={icon2} x='20' y='20' width='48' height='48' />
              </svg>
              <h2>Detailed Records</h2>
              <p
                style={{
                  color: '#9E9AA8',
                  weight: 500,
                  fontSize: '15px',
                  lineHeight: '26px',
                }}
              >
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'lef',
              textAlign: 'left',
              borderRadius: '5px',
              height: '90%',
              background: '#FFF',
              padding: '20px',
              marginBottom: '10px',
              position: 'relative',
              zIndex: 2,
              '@media (max-width: 500px)': {
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px ',
                marginTop: '15%',
              },
            }}
          >
            <Typography component='div'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='88'
                height='88'
                viewBox='0 0 88 88'
                fill='none'
              >
                <circle cx='44' cy='44' r='44' fill='#3A3054' />
                <image href={icon3} x='20' y='20' width='48' height='48' />
              </svg>
              <h2>Fully Customizable</h2>
              <p
                style={{
                  color: '#9E9AA8',
                  weight: 500,
                  fontSize: '15px',
                  lineHeight: '26px',
                }}
              >
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        component='img'
        src={barra}
        alt='Rectangle'
        sx={{
          width: '60%',
          height: '8px',
          position: 'absolute',
          bottom: '30%',
          zIndex: 1,
          transform: 'rotate(0deg)',
          transformOrigin: 'center',
          '@media (max-width: 900px)': {
            transform: 'rotate(0deg)',
            width: '8px',
            height: '60%',
            bottom: '5%',
          },
        }}
      />
    </Grid>
  )
}

export default Middlebody
