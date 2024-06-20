import React from "react";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import rangi from "../images/rangilogo.png";
const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleSelect() {
    setIsOpen(!isOpen);
  }
  function closeSelect() {
    setIsOpen(false);
  }
  let modalIsOpen = false;
  return (
    <>
      <div className="main-container w-full relative bg-[#28334a] ">
        <div className="navbar w-full shadow-lg h-16 flex justify-between px-20 items-center air:px-12 m480:px-6">
          <Link to="/">
            <div className="logo font-arial font-medium items-center flex gap-1 m480:gap-0 text-[#fff]">
              {/* PREVIOUS FONT  
                  font-curs   */}
              <img src={rangi} className="h-14" />
              <span className="text-[24px] m480:text-lg">RANGI RENOVATION</span>
            </div>
          </Link>
          <div className="navOpts items-center flex gap-16 lg2:gap-10 font-mons font-normal text-base lg:hidden">
            <Link
              to="/"
              className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
            >
              About Us
            </Link>
            <Link
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              // to="/homeservice"
              className="py-[20px] items-center text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
            >
              Services
            </Link>
            {isOpen && (
              <div
                onMouseEnter={() => {
                  modalIsOpen = true;
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 300);
                }}
                className="serviceBox flex flex-col bg-white absolute top-16 left-[53%] z-50"
              >
                <Link
                  to="/homeservice"
                  className="p-3 text-[#28334a] hover:bg-[#DCDBDB] transition ease-in-out cursor-pointer focus:bg-[#DCDBDB]"
                >
                  Home Services
                </Link>
                <Link
                  to="/officeservice"
                  className="p-3 text-[#28334a] hover:bg-[#DCDBDB] transition ease-in-out cursor-pointer focus:bg-[#DCDBDB]"
                >
                  Office Services
                </Link>
                <Link
                  to="/customaddition"
                  className="p-3 text-[#28334a] hover:bg-[#DCDBDB] transition ease-in-out cursor-pointer focus:bg-[#DCDBDB]"
                >
                  Custom Addition
                </Link>
              </div>
            )}
            <Link
              to="/contact"
              className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
            >
              Contact Us
            </Link>
          </div>
          <div className="getstarted font-mons font-semibold lg:hidden">
            {/* <button className=" px-3 py-2 rounde bg-white hover:bg-[#DCDBDB] rounded text-[#28334a] transition ease-in-out">
              Get Started
            </button> */}
            <a
              href="tel:+1 (905) 867-7502"
              className="text-[#fff] font-mons font-normal"
            >
              +1 (905) 867-7502
            </a>
            {/* <a href="tel:+12123334444">(212) 333-4444</a> */}
          </div>
          <div onClick={handleSelect} className="menuBtn hidden lg:block">
            <LuMenu className="text-3xl text-[#fff]" />
          </div>
        </div>
        {isOpen && (
          <div
            className="respMenuList w-full  font-int font-semibold text-lg px-4 py-16 bg-[#28334a] shadow-lg hidden lg:block air:absolute z-50 m480:py-10"
            data-aos="fade-down"
          >
            <div className="list flex flex-col gap-6 items-center">
              <Link
                onClick={closeSelect}
                to="/"
                className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
              >
                Home
              </Link>
              <Link
                onClick={closeSelect}
                to="/about"
                className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
              >
                About Us
              </Link>
              <Link
                onClick={closeSelect}
                to="/homeservice"
                className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
              >
                Home Services
              </Link>
              <Link
                onClick={closeSelect}
                to="/officeservice"
                className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
              >
                Office Services
              </Link>
              <Link
                onClick={closeSelect}
                to="/customaddition"
                className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
              >
                Custom Addition
              </Link>
              <Link
                onClick={closeSelect}
                to="/contact"
                className="text-[#fff] hover:text-[#DCDBDB] transition ease-in-out cursor-pointer focus:text-[#DCDBDB]"
              >
                Contact Us
              </Link>
              <a href="tel:+1 (905) 867-7502" className="text-[#fff] font-mons">
                +1 (905) 867-7502
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarComponent;
