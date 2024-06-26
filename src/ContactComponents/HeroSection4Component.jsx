import React from "react";
// import contact2 from "../images/contact2.jpg";
import contact3 from "../images/Rangi-Renovations-Contact-us-hero.jpg";

const HeroSection4 = () => {
  return (
    <>
      <div className="mainContainer w-[100%] h-screen bg-slate-400 relative  overflow-hidden flex justify-center items-center">
        <img
          src={contact3}
          className="h-screen w-full object-cover z-0 brightness-[60%] absolute"
        />
        <div
          className="herocontent w-[80%] pt-24 pb-24 px-20 air:px-12 m480:px-8 absolute z-10 air:w-[100%] flex flex-col gap-7 m480:gap-6 text-center"
          data-aos="fade-down"
          data-aos-duration="1100"
          data-aos-once="true"
        >
          <div className="empower text-[#fff] text-lg font-mons md:text-base">
            <p>Building Connections, Strengthening Relationships</p>
          </div>
          <div className="build">
            <h1 className="text-[#fff] text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Get in Touch: Let's Make Your Vision a Reality!
            </h1>
          </div>
          {/* <div className="reachout font-int font-semibold">
            <button className="  px-4 py-2 m480:px-2 m480:py-1 rounded border-[2px] border-white text-white transition ease-in-out hover:scale-[1.03]">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection4;
