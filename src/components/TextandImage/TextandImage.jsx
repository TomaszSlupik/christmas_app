import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './TextandImage.scss'

export default function TextandImage() {

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary,
    }));
    

  return (
    <div className='TextandImage'>
      <div className="TextandImage__box">
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <img src={process.env.PUBLIC_URL + '/img/fireworks.jpg'} alt="nowy rok - fajerwerki" />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item className='TextandImage__box-text'>Strona o tematyce Świąt Bożego Narodzenia i Nowego Roku.
              
              </Item>
            </Grid>
          </Grid>
        </Box>

      </div>
    </div>
  )
}
