import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className='p-5 lg:px-20'>
        <div className=' shadow-lg p-5'>
            <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid container className=' space-y-5'>
        {[1,1,1,1].map(()=><Grid item container className='shadow-xl rounded-md p-5 border'sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-5'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70" alt="" />
                        <div className='space-y-2 ml-5'>
                        <p className=' font-semibold'>Mens Blue Kurta Top</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color : Blue</span>  <span>Size : M</span></p>
                        <p className=' text-sm opacity-80 font-semibold'>Seller : linaria</p>
                        <p className=' text-sm opacity-80 font-semibold'>₹1987</p>
                    </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box sx={{color:"#662D92"}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>
                </Grid>)}
        </Grid>
    </div>
  )
}

export default OrderDetails