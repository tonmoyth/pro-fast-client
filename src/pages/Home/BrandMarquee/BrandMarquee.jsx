import React from "react";
import Marquee from "react-fast-marquee";

import brand1 from "../../../assets/brands/amazon.png";
import brand2 from "../../../assets/brands/amazon_vector.png";
import brand3 from "../../../assets/brands/casio.png";
import brand4 from "../../../assets/brands/moonstar.png";
import brand5 from "../../../assets/brands/randstad.png";
import brand6 from "../../../assets/brands/start-people 1.png";
import brand7 from "../../../assets/brands/start.png";

const logos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

const BrandMarquee = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-2xl font-bold mb-6">
        We've helped thousands of sales teams
      </h2>

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`brand-${index}`}
            className="h-8 mx-6 object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
