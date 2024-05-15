import React from "react";
import additional from "../images/additional.jpg";
const CustomAdditionHero = () => {
  return (
    <>
      <div className="mainContainer w-[100%] h-screen bg-slate-400 relative  overflow-hidden">
        <img
          src={additional}
          className="h-screen w-full object-cover z-0 brightness-[60%] absolute"
        />
        <div
          className="herocontent w-[80%] pt-24 pb-24 px-20 air:px-12 m480:px-8 absolute z-10 air:w-[100%] flex flex-col gap-7 m480:gap-6 air:text-center"
          data-aos="fade-right"
          data-aos-duration="1100"
          data-aos-once="true"
        >
          <div className="empower text-[#fff] text-lg font-mons md:text-base">
            <p>Welcome to Your Home's Next Chapter</p>
          </div>
          <div className="build">
            <h1 className="text-[#fff] text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Are You Deeply Connected To Your Home, Yet Find Yourself Yearning
              For More Space?
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAdditionHero;
