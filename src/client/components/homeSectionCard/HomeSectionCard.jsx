import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className=" cursor-pointer flex flex-col items-center rounded-lg shadow-lg bg-white overflow-hidden w-[15rem] mx-3 border">
      <div className=" w-[10rem] h-[13rem]">
        <img
          src={product.imageUrl}
          alt="fashion"
          className=" object-cover object-top w-full h-full"
        />
        {/* </Link> */}
      </div>
      <div className="p-4">
        <h3 className=" text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className=" text-sm mt-3 text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
