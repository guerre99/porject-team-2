import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import facebookIcon from './assets/icon-facebook.svg'
import twitterIcon from './assets/icon-twitter.svg'
import pinterestIcon from './assets/icon-pinterest.svg'
import instagramIcon from './assets/icon-instagram.svg'
import './footer.css'
function FooterLinks() {
  return (
    <Grid
      container
      justifyContent='center'
      sx={{
        backgroundColor: '#232127',
        color: '#ffffff',
        padding: '50px 0',
        width: '100%',
        position: 'absolute',
      }}
    >
      <Grid item xs={12} sm={6} md={2}>
        <Typography variant='h5'>Shortly</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Typography variant='h6'>Features</Typography>
        <ul
          sx={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left',
          }}
        >
          <li>
            <a href='#'>Link Shortening</a>
          </li>
          <li>
            <a href='#'>Branded Links</a>
          </li>
          <li>
            <a href='#'>Analytics</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Typography variant='h6'>Resources</Typography>
        <ul
          className='footer-list'
          sx={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left',
          }}
        >
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Developers</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={10} md={2}>
        <Typography variant='h6'>Company</Typography>
        <ul
          sx={{
            position: 'absolute',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left',
          }}
        >
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Our Team</a>
          </li>
          <li>
            <a href='#'>Careers</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={1}
        justifyContent='flex-end'
        alignItems='center'
        sx={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          display: 'flex',
        }}
      >
        <a
          href='#'
          style={{
            textDecoration: 'none',
            color: '#2BD0D0',

            margin: '0 5px',
          }}
          className='social-icon'
        >
          <img src={facebookIcon} alt='Facebook Icon' />
        </a>
        <a href='#' style={{}} className='social-icon'>
          <img src={twitterIcon} alt='Twitter Icon' />
        </a>
        <a href='#' style={{}} className='social-icon'>
          <img src={pinterestIcon} alt='Pinterest Icon' />
        </a>
        <a href='#' style={{}} className='social-icon'>
          <img src={instagramIcon} alt='Instagram Icon' />
        </a>
      </Grid>
    </Grid>
  )
}

export default FooterLinks
