import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import WelcomeComponent from "./WelcomeComponent";

const ImageCarousel = ({ components }) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop showArrows={false} showStatus={false}>
      {components.map((eachDataset, index) => (
        <WelcomeComponent props={eachDataset} key={index}/>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;