import React from "react";
import Logo from "../assets/more/logo1.png";
import { Link } from "react-router";

const ErrorNavbar = () => {
  return (
    <div className="navbar flex justify-center shadow-sm" id="navError">
        <div className="flex gap-x-2.5 items-center">
          <img src={Logo} alt="" className="h-10 w-10" />
          <Link to={`/`} className=" text-3xl">
            Coffee House
          </Link>
        </div>
      </div>
   
  );
};

export default ErrorNavbar;
