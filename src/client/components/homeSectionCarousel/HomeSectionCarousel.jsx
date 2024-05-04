import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({data,sectionName}) => {
    const carousel = useRef(null);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

    const slidePrev=() => carousel.current.slidePrev();
    const slideNext=() => carousel.current.slideNext();

  return (
    <div className="border rounded-lg">
      <div className="relative p-5">
        <h2 className=" text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          ref={carousel}
        />
        <Button
            variant="contained"
            aria-label="next"
            onClick={slideNext}
            className="z-50"
            sx={{
              position: "absolute",
              top: "12rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              zIndex:1,
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        <Button
          variant="contained"
          onClick={slidePrev}
          className="z-50"
          sx={{
            position: "absolute",
            top: "12rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
            zIndex:1,
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
