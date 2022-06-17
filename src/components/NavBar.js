import React from "react";

const NavBar = () => {
  return (
    <div className="w-full border-b-2">
      <div className="flex lg:py-4 lg:px-0 py-4 px-5 justify-between max-w-7xl lg:mx-auto items-center my-5">
        {/* logo */}
        <div>
            LOGO
        </div>
        {/* navigation */}
        <div className="flex items-center lg:gap-5 gap-2 ">
          <a
            href="1"
            className="block active:text-blue-500 lg:text-xl text-gray-400 font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="1"
            className="block active:text-blue-500 lg:text-xl text-gray-400 font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Course
          </a>
          <a
            href="1"
            className="block active:text-blue-500 lg:text-xl text-gray-400 font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Job Vancancy
          </a>
        </div>
        {/* btn or user */}
        <div className="flex">
          <div className="flex lg:gap-5 gap-2">
            <button className="bg-blue-500 lg:py-3 lg:px-5 rounded-lg py-1 px-2 text-sm lg:text-lg text-white font-bold">
              Sign Up
            </button>
            <button className="lg:py-3 lg:px-5 py-1 px-2 text-sm lg:text-lg text-blue-500 font-bold">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
