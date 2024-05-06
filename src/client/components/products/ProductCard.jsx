import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 cursor-pointer transition-all">
      <div className=" h-[20rem]">
        <img
          src={product.imageUrl}
          alt="top"
          className=" w-full h-full object-cover object-left-bottom"
        />
      </div>
      <div className="textPart bg-white p-3">
        <p className=" font-bold opacity-60">{product.brand}</p>
        <p>{product.title}</p>
        <div className=" flex items-center space-x-2">
          <p className=" font-semibold">{product.discountedPrice}</p>
          <p className=" line-through opacity-50">{product.price}</p>
          <p className=" font-semibold text-red-600">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
