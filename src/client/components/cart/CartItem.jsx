import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 mt-3 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            alt=""
          />
        </div>
        <div className=" space-y-1 ml-5">
          <p className=" font-semibold">Mens Kurta White</p>
          <p className=" opacity-70">Size : L , White</p>
          <p className="opacity-70">Seller : Untitled Fashion</p>
          <div className=" flex space-x-3 text-gray-900 items-center pt-4">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-red-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className=" lg:flex items-center space-x-10 pt-4">
        <div className=" flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="px-7 py-1 border rounded-sm">2</span>
          <IconButton sx={{color:"#662D92"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:"#662D92",fontWeight:"600"}}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
