import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerOne from "../../../assets/banner/banner1.png"
import bannerTwo from "../../../assets/banner/banner2.png"
import bannerThree from "../../../assets/banner/banner3.png"

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
      <div>
        <img src={bannerOne} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={bannerTwo} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={bannerThree} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
