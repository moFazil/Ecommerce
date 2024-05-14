import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  
  const handleCheckout=()=>{
    navigate("/checkout/?step=2")
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className=" col-span-2">
          {[1,1,1,1].map((item)=><CartItem/>)}
        </div>
        <div className=" sticky top-0 px-5 h-[100vh] mt-5 lg:mt-0">
          <div className=" border">
            <p className=" uppercase font-bold opacity-60 pb-4">
              Price Details
            </p>
            <Divider />
            <div className=" space-y-3 font-semibold px-2">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹1987</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className=" text-green-600">₹1887</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className=" text-green-600">Free</span>
              </div>
              <Divider />
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className=" text-green-600">₹1887</span>
              </div>
            </div>
            <Button
                  variant="contained"
                  className=" w-full"
                  sx={{
                    px: "2rem",
                    py: "1rem",
                    mt: "2rem",
                    bgcolor: "#662D92",
                  }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
