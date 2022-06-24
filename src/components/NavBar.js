import React from "react";

const NavBar = () => {
  return (
    <div className="w-screen border-b-2 bg-white">
      <div className="flex lg:py-2 lg:px-0 py-4 px-5 justify-between max-w-7xl lg:mx-auto items-center my-2">
        {/* logo */}
        <div className="w-36">
            <img src="./icon/logo_ebility.png"/>
        </div>
        {/* navigation */}
        <div className="flex items-center lg:gap-5 gap-2 ">
          <a
            href="1"
            className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="1"
            className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Course
          </a>
          <a
            href="1"
            className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Job Vacancy
          </a>
          <a
            href="1"
            className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Certification
          </a>
        </div>
        {/* btn or user */}
        <div className="flex">
          <div className="flex lg:gap-5 gap-2">
            <button className="bg-blue-500 lg:px-4 rounded-lg py-1 px-2 text-sm lg:text-base text-white font-semibold">
              Sign Up
            </button>
            <button className="lg:py-3 lg:px-5 py-1 px-2 text-sm lg:text-base text-blue-500 font-semibold">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
