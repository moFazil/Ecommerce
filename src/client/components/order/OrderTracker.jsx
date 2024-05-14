import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out Of Delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full shadow-lg py-10 my-5'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label)=><Step>
                <StepLabel sx={{color:"#662D92",fontSize:"44px"}}>
                    {label}
                </StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker