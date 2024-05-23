import React from "react";
// import service2 from "../images/service2.jpg";
import service2 from "../images/services2.jpg";

const HeroSection3Component = () => {
  return (
    <>
      <div className="mainContainer w-[100%] h-screen bg-slate-400 relative  overflow-hidden flex justify-center items-center">
        <img
          src={service2}
          className="h-screen w-full object-cover z-0 brightness-[60%] absolute"
        />
        <div
          className="herocontent w-[80%] pt-24 pb-24 px-20 air:px-12 m480:px-8 absolute z-10 air:w-[100%] flex flex-col gap-7 m480:gap-6 text-center"
          data-aos="fade-down"
          data-aos-duration="1100"
          data-aos-once="true"
        >
          <div className="empower text-[#fff] text-lg font-mons md:text-base">
            <p>
              Building Dreams, One Addition at a Time: Expert Home Extension
            </p>
          </div>
          <div className="build">
            <h1 className="text-[#fff] text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Home Services: Your Trusted Guide for Home Renovations
            </h1>
          </div>
          {/* <div className="reachout font-mons font-semibold">
            <button className=" px-4 py-2 m480:px-2 m480:py-1 rounded border-[2px]  border-white text-white transition ease-in-out hover:scale-[1.03]">
              Reach Out
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection3Component;
