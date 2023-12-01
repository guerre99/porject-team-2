import { Grid, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function Card({ originalURL, shortURL }) {
  const [copied, setCopied] = useState(false)

  const copiarAlPortapapeles = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 300)
      })
      .catch((err) => console.error('Error copying to clipboard:', err))
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          width: '70%',
          mx: 'auto',
          my: '2%',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '70%',
            wordBreak: 'break-all',
          }}
        >
          <Typography noWrap sx={{ width: '50%', fontFamily: 'Poppins' }}>
            {originalURL}
          </Typography>
          <Typography style={{ color: '#2BD0D0' }}>{shortURL}</Typography>
        </Grid>
        <Button
          variant="contained"
          onClick={() => copiarAlPortapapeles(shortURL)}
          sx={{
            width: '20%',
            height: '100%',
            my: '2%',
            backgroundColor: copied ? '#4B3F6B' : '#2BD0D0',
            '&:hover': {
              backgroundColor: copied ? '#4B3F6B' : '#2BD0D0', // problemas con el color del hover por default, asi que implemento este color
            },
          }}
        >
          {copied && 'Copied'}
          {!copied && 'Copy'}
        </Button>
      </Grid>
    </>
  )
}

export default Card
