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
      sx={{ padding: '20px', textAlign: 'center' }}
    >
      <Grid item container justifyContent='center'>
        <Typography
          variant='h3'
          sx={{ fontWeight: 700, color: '#34313D', textAlign: 'center' }}
        >
          Estadísticas Avanzadas
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent='center'
        sx={{
          color: '#9E9AA8',
          padding: '0 16px', // Ajuste del padding para pantallas más pequeñas
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        <Typography
          variant='p'
          sx={{
            fontWeight: 500,
            fontSize: '16px', // Ajuste del tamaño de fuente para pantallas más pequeñas
            lineHeight: '24px', // Ajuste de la altura de línea para pantallas más pequeñas
            marginBottom: '20px',
          }}
        >
          <p>
            Rastrea cómo tus enlaces están funcionando en la web con nuestro
            panel de estadísticas avanzadas.
          </p>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{ marginTop: '20px' }}
      >
        {/* Caja de Brand Recognition */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Centrar en dispositivos móviles
              textAlign: 'center', // Centrar el texto en dispositivos móviles
              borderRadius: '5px',
              background: '#FFF',
              padding: '20px',
              marginBottom: '20px',
              position: 'relative',
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
              <p style={{ color: '#9E9AA8' }}>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instill confidence in
                your content.
              </p>
            </Typography>
          </Box>
        </Grid>

        {/* Caja de Detailed Records */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Centrar en dispositivos móviles
              textAlign: 'center', // Centrar el texto en dispositivos móviles
              borderRadius: '5px',
              background: '#FFF',
              padding: '20px',
              marginBottom: '20px',
              position: 'relative',
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
              <p style={{ color: '#9E9AA8' }}>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </Typography>
          </Box>
        </Grid>

        {/* Caja de Fully Customizable */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Centrar en dispositivos móviles
              textAlign: 'center', // Centrar el texto en dispositivos móviles
              borderRadius: '5px',
              background: '#FFF',
              padding: '20px',
              marginBottom: '20px',
              position: 'relative',
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
              <p style={{ color: '#9E9AA8' }}>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Barra Horizontal */}
      <Box
        sx={{
          width: '100%',
          height: '8px',
          background: '#2BD0D0',
          marginBottom: '20px',
        }}
      />

      {/* Rectángulo */}
      <Box
        component='img'
        src={barra}
        alt='Rectangle'
        sx={{ width: '100%', position: 'relative' }}
      />
    </Grid>
  )
}

export default Middlebody
