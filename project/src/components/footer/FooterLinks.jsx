import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import facebookIcon from './assets/icon-facebook.svg'
import twitterIcon from './assets/icon-twitter.svg'
import pinterestIcon from './assets/icon-pinterest.svg'
import instagramIcon from './assets/icon-instagram.svg'

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
        position: 'relative',
      }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h5'>Shortly</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
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
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Link Shortening
            </a>
          </li>
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Branded Links
            </a>
          </li>
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Analytics
            </a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6'>Resources</Typography>
        <ul
          sx={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left',
          }}
        >
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Blog
            </a>
          </li>
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Developers
            </a>
          </li>
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Support
            </a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6'>Company</Typography>
        <ul
          sx={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left',
          }}
        >
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              About
            </a>
          </li>
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Our Team
            </a>
          </li>
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Careers
            </a>
          </li>
          <li>
            <a href='#' style={{ textDecoration: 'none', color: '#ffffff' }}>
              Contact
            </a>
          </li>
        </ul>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent='flex-end'
        alignItems='center'
        sx={{
          position: 'absolute',
          top: '20px',
          right: '0',
          display: 'flex',
        }}
      >
        <a
          href='#'
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            margin: '0 5px',
          }}
          className='social-icon'
        >
          <img
            src={facebookIcon}
            alt='Facebook Icon'
            sx={{
              width: '30px',
              '&:hover': {
                color: '#2BD0D0',
              },
            }}
          />
        </a>
        <a
          href='#'
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            margin: '0 5px',
          }}
          className='social-icon'
        >
          <img
            src={twitterIcon}
            alt='Twitter Icon'
            sx={{
              width: '30px',
              '&:hover': {
                color: '#2BD0D0',
              },
            }}
          />
        </a>
        <a
          href='#'
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            margin: '0 5px',
          }}
          className='social-icon'
        >
          <img
            src={pinterestIcon}
            alt='Pinterest Icon'
            sx={{
              width: '30px',
              '&:hover': {
                color: '#2BD0D0',
              },
            }}
          />
        </a>
        <a
          href='#'
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            margin: '0 5px',
          }}
          className='social-icon'
        >
          <img
            src={instagramIcon}
            alt='Instagram Icon'
            sx={{
              width: '30px',
              '&:hover': {
                color: '#2BD0D0',
              },
            }}
          />
        </a>
      </Grid>
    </Grid>
  )
}

export default FooterLinks
