import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className='w-[90%] md:w-[80%] mx-auto'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
