import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const NavLinks = (
    <>
      <li className="hover:text-slate-500">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-slate-500">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:text-slate-500">
        <Link to="/services">Services</Link>
      </li>
      <li className="hover:text-slate-500">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="hover:text-slate-500">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="hover:text-slate-500">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="fixed z-10 w-full lg:px-14">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:bg-transparent bg-black bg-opacity-90 text-center">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo Here
          </span>
        </Link>
        <div className="flex md:order-2">
          <div className="justify-center items-center lg:block">
            <Link to="">
              <button className="commonbutton rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400">
                <span className="block text-black px-4 py-1 rounded-full bg-white hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white">
                  Contact Us
                </span>
              </button>
            </Link>
          </div>
          <div className="lg:hidden text-center">
            <button
              className="p-2 text-gray-700 rounded-md outline-none"
              onClick={toggleNavbar}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`items-center justify-between lg:flex w-auto order-1 ${
            navbar ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="nav-link flex flex-col lg:flex-row font-medium p-4 lg:p-0 mt-4 border rounded-lg  space-x-8 md:mt-0 md:border-0">
            {NavLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
