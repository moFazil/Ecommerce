import React from "react";
import AddressCard from "../addressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <div className=" py-4">
        <div className="lg:grid grid-cols-3 relative space-y-3">
          <div className=" col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem key={item} />
            ))}
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
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
