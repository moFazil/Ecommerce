import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid 
        className=' text-center mt-10'
        container
            sx={{bgcolor:"black",color:"white",py:3}}
        >
            <Grid xs={12} sm={6} md={3}>
                <Typography className=' pb-5 cursor-pointer' variant='h5'> Company </Typography>
                <Typography className=' pb-5 cursor-pointer' variant='h6'> About </Typography>
                <Typography className=' pb-5 cursor-pointer' variant='h6'> Blog </Typography>
                <Typography className=' pb-5 cursor-pointer' variant='h6'> Investors </Typography>
                <Typography className=' pb-5 cursor-pointer' variant='h6'> Contact </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer