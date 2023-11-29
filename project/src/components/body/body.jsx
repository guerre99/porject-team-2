import Card from './card'
import Middlebody from './middlebody'
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

  const [errorInput, setErrorInput] = useState(false)

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

    if (enlace.originalURL.trim() !== '') {
      axios
        .post('https://api.short.io/links', enlace, {
          headers: {
            Authorization: 'sk_hQnlOaNQ6GFm7zdv',
            'Content-Type': 'application/json',
          },
        })
        .then(({ data }) => {
          getallLinks()
          setErrorInput(false)
          setEnlace({ ...enlace, originalURL: '' })
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error)
        })
    } else {
      setErrorInput(true)
    }
  }

  if (!Object.values(generatedLink).length) return <p>CARGANDO....</p>

  return (
    <>
      <Grid
        component="main"
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
            ml: '0',
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
            error={errorInput}
            label={
              !errorInput
                ? !enlace.originalURL
                  ? 'Shorten a link here...'
                  : ''
                : 'Please add a link...'
            }
            variant="outlined"
            value={enlace.originalURL}
            onChange={(e) => {
              setEnlace({ ...enlace, originalURL: e.target.value })
              setErrorInput(false)
            }}
            sx={{
              width: '70%',
              height: '30%',
              '&>*  ': { fontFamily: 'Poppins', backgroundColor: 'white' },
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
        <Middlebody />
      </Grid>
    </>
  )
}

export default Body
