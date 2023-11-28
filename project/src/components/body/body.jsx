import Card from './card'

import { Grid, TextField, Button } from '@mui/material'
import BackgroundLogo from './bg-shorten-desktop.svg'

import { useState } from 'react'

function Body() {
  const [enlace, setEnlace] = useState('')
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ backgroundColor: '#EFF1F7' }}
      >
        <Grid
          component="form"
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          width={'70%'}
          sx={{
            mb: '1%',
            p: '1.5%',
            backgroundColor: '#3A3054',
            backgroundImage: `url(${BackgroundLogo})`,
          }}
          spacing={2}
        >
          <TextField
            id="outlined-basic"
            label={!enlace ? 'Shorten a link here...' : ''}
            variant="outlined"
            value={enlace}
            onChange={(e) => setEnlace(e.target.value)}
            sx={{
              backgroundColor: 'white',
              width: '70%',
              height: '30%',
              fontFamily: 'Poppins',
            }}
            InputLabelProps={{
              shrink: false,
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: '20%',
              height: '100%',
              backgroundColor: '#2BD0D0',
              '&:hover': {
                backgroundColor: '#9AE3E3',
              },
            }}
          >
            Shorten It!
          </Button>
        </Grid>
        <Card />

        <Card />

        <Card />
      </Grid>
    </>
  )
}

export default Body
