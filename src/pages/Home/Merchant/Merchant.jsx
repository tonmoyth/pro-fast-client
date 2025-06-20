import React from "react";
import locationImage from "../../../assets/location-merchant.png"

const Merchant = () => {
  return (
    <section className="bg-accent-content mb-8 rounded-4xl">
      <div className="container flex flex-col justify-center p-8 lg:p-20 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col text-center  lg:text-left space-y-4 text-base-100">
          <h1 className="text-2xl font-bold leading-none sm:text-4xl">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className=" text-md">
            We offer the lowest delivery charge with the highest value along
            with 100% <br /> safety of your product. Pathao courier delivers
            your parcels in every <br /> corner of Bangladesh right on time.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="btn btn-primary rounded-full px-4 border-none text-black">Become a Merchant</button>
            <button className="  border border-primary hover:bg-primary transition-all hover:text-black duration-300 rounded-full px-4 py-2  text-primary">Become a Merchant</button>
          </div>
        </div>
        <div className="flex items-center justify-center  mt-4 lg:mt-0 ">
          <img
            src={locationImage}
            alt=""
            className="object-contain h-68 "
          />
        </div>
      </div>
    </section>
  );
};

export default Merchant;
