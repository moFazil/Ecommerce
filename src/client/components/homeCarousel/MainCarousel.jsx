import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carouselData } from "./MainCarouselData";

export const MainCarousel = () => {
  const items = carouselData.map((item) => (
    <img src={item.image} className=" cursor-pointer" role="presentation" alt=""/>
  ));
  return (
    <div>
      <AliceCarousel
        animationType="fadeout"
        animationDuration={1000}
        disableButtonsControls
        infinite
        items={items}
        autoPlay
        autoPlayInterval={1500}
      />
    </div>
  );
};
