import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const accessLogin = useSelector((state) => state.accessLogin)
  return (
    <div className="w-screen border-b-2 bg-white">
      <div className="flex lg:py-2 lg:px-0 py-4 px-5 justify-between max-w-7xl lg:mx-auto items-center my-2">
        {/* logo */}
        <div className="w-36">
          <img src="/icon/logo_ebility.png" alt="/"/>
        </div>
        {/* navigation */}
        <div className="flex items-center lg:gap-5 gap-2 ">
          {accessLogin === false &&
            <Link
              to="/"
              className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
            >
              Home
            </Link>
          }
          {accessLogin === true &&
            <Link
              to="/mycourse"
              className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
            >
              My Class
            </Link>
          }
          <Link
            to="/"
            className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Course
          </Link>
          <Link
            to="/job"
            className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Job Vacancy
          </Link>
        </div>
        {/* btn or user */}
        {accessLogin === false &&
          <div className="flex">
            <div className="flex lg:gap-5 gap-2">
              <Link className="bg-blue-500 lg:px-5 rounded-lg my-auto py-3 text-sm lg:text-base text-white font-semibold" to="/register">
                Sign Up
              </Link>
              <Link className="lg:py-3 lg:px-5 py-1 px-2 text-sm lg:text-base text-blue-500 font-semibold" to="/login">
                Sign In
              </Link>
            </div>
          </div>
        }
        {accessLogin === true &&
          <div className="flex">
            <div className="flex gap-3 items-center">
              <img className="w-8" src="/icon/icon_user.png" />
              <p>irsyad@gmail.com</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
