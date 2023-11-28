import Card from './card'

import { Grid, TextField, Button } from '@mui/material'
import BackgroundLogo from './bg-shorten-desktop.svg'

import axios from 'axios'

import { useState, useEffect } from 'react'

function Body() {
  const [enlace, setEnlace] = useState({
    domain: 'chg2.short.gy',
    originalURL: '',
  })

  const [generatedLink, setGeneratedLink] = useState([])

  function getallLinks() {
    axios
      .get(
        'https://api.short.io/api/links?domain_id=926669&limit=30&dateSortOrder=desc',
        {
          headers: {
            Authorization: 'sk_hQnlOaNQ6GFm7zdv',
            'Content-Type': 'application/json',
          },
        }
      )
      .then(({ data }) => {
        console.log(data)
        setGeneratedLink(
          data.links.map((item) => ({
            id: item.id,
            originalURL: item.originalURL,
            shortURL: item.shortURL,
          }))
        )
      })
  }

  useEffect(() => {
    getallLinks()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('https://api.short.io/links', enlace, {
        headers: {
          Authorization: 'sk_hQnlOaNQ6GFm7zdv',
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => {
        getallLinks()
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error)
      })
  }

  if (!Object.values(generatedLink).length) return <p>CARGANDO....</p>

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
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label={!enlace.originalURL ? 'Shorten a link here...' : ''}
            variant="outlined"
            value={enlace.originalURL}
            onChange={(e) => {
              setEnlace({ ...enlace, originalURL: e.target.value })
              console.log(enlace)
            }}
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
            type="submit"
          >
            Shorten It!
          </Button>
        </Grid>
        {generatedLink.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Grid>
    </>
  )
}

export default Body
