import { Grid, Button } from '@mui/material'

function Card({ originalURL, shortURL }) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          width: '60%',
          mx: 'auto',
          my: '2%',
          backgroundColor: 'white',
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '70%',
          }}
        >
          <p>{originalURL}</p>
          <p style={{ color: '#2BD0D0' }}>{shortURL}</p>
        </Grid>
        <Button
          variant="contained"
          sx={{
            width: '20%',
            height: '100%',
            backgroundColor: '#2BD0D0',
            '&:hover': {
              backgroundColor: '#4B3F6B   ',
            },
          }}
        >
          Copy
        </Button>
      </Grid>
    </>
  )
}

export default Card
