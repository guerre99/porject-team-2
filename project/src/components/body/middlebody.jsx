import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import icon1 from './assets/icon-brand-recognition.svg'
import icon2 from './assets/icon-detailed-records.svg'
import icon3 from './assets/icon-fully-customizable.svg'
import barra from './assets/Rectangle.png'

function Middlebody() {
  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item container justifyContent='center'>
        <Typography variant='h3' sx={{ fontWeight: 700, color: '#34313D' }}>
          Advanced Statistics
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent='center'
        sx={{
          color: '#9E9AA8',
          padding: '0 20%',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        <Typography
          variant='p'
          sx={{
            fontWeight: 500,
            padding: '0 20%',
            fontSize: '18px',
            lineHeight: '32px',
            fontStyle: 'normal',
            letterSpacing: '0.123px',
            marginBottom: '20px',
          }}
        >
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </Typography>
      </Grid>

      <Box
        container='true'
        xs={12}
        md={3}
        sm={10}
        sx={{ display: 'flex', justifyContent: 'space-between', flexShrink: 0 }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '0 3%',
            flexDirection: 'column',

            width: '100%',
            alignItems: 'center',
            textAlign: 'left',
            marginBottom: '50px',
            marginBottom: '50px',
            marginLeft: '300px',
            marginRight: '30px',
            borderRadius: '5px',
            background: '#FFF',
            padding: '20px',
            zIndex: 2,
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
              }}
            >
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 3%',
            width: '100%',
            alignItems: 'center',
            textAlign: 'left',
            marginTop: '20px',
            marginBottom: '50px',
            borderRadius: '5px',
            background: '#FFF',
            padding: '20px',
            zIndex: 2,
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
              }}
            >
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </Typography>
        </Box>
        <div
          style={{
            width: '1110px',
            height: '8px',
            background: '#2BD0D0',
            position: 'absolute',
            top: '132%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            display: 'flex',
            padding: '0 3%',
            flexDirection: 'column',

            width: '100%',
            alignItems: 'center',
            textAlign: 'left',
            marginTop: '60px',
            marginBottom: '50px',
            marginRight: '250px',
            marginLeft: '30px',
            borderRadius: '5px',
            background: '#FFF',
            padding: '50px',
            zIndex: 2,
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
              }}
            >
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </Typography>
        </Box>
        <Box
          sx={{
            barra: `url(${barra})`,
          }}
        ></Box>
      </Box>
    </Grid>
  )
}

export default Middlebody
