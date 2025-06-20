import React from "react";
import { Outlet } from "react-router";
import authenticationImage from "../../assets/authImage.png";
import Logo from "../../shared/proFastLogo/Logo";

const AuthenticationLayout = () => {
  return (
    <div className=" min-h-screen w-11/12 mx-auto pt-6">
      <div>
        <Logo></Logo>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex justify-center items-center">
          <img src={authenticationImage} className="max-w-sm rounded-lg " />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
