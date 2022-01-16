import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const toggleHandler = () => {
    const navMenus = document.getElementById("navMenus");
    navMenus.classList.remove("h-0", "opacity-0", "overflow-hidden");
    const openBar = document.getElementById("openBar");
    openBar.classList.toggle("hidden");
    const closeBar = document.getElementById("closeBar");
    closeBar.classList.toggle("hidden");
  };
  const closeBarHandler = () => {
    const navMenus = document.getElementById("navMenus");
    navMenus.classList.add("h-0", "opacity-0", "overflow-hidden");
    const openBar = document.getElementById("openBar");
    openBar.classList.toggle("hidden");
    const closeBar = document.getElementById("closeBar");
    closeBar.classList.toggle("hidden");
  };
  return (
    <>
      <nav>
        <div className="container md:flex justify-between items-center pt-5 px-8">
          {/* Branding Heading */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl text-center font-Kushan text-white">
              <span className="text-red-400">P</span>aint
              <span className="text-pink-600">H</span>ub
            </h1>
            <div
              id="openBar"
              onClick={toggleHandler}
              className="text-xl text-white md:hidden cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div
              onClick={closeBarHandler}
              id="closeBar"
              className="text-2xl text-white hidden md:hidden cursor-pointer"
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          {/* Menu items */}
          <div
            id="navMenus"
            className="text-center text-white h-0 opacity-0 overflow-hidden md:h-auto md:opacity-100 md:overflow-auto transition-opacity duration-1000 ease-in-out"
          >
            <ul className="md:flex mt-5 md:mt-0 text-2xl font-Dosis font-bold gap-10">
              <li className="my-5">Home</li>
              <li className="my-5">About</li>
              <li className="my-5">Services</li>
              <li className="my-5">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
