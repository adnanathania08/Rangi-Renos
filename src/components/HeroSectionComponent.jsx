import React from "react";
import heroVideo from "../images/Rangi-Renovatios-Home-hero.mp4";
const HeroSectionComponent = () => {
  return (
    <>
      <div className="mainContainer w-[100%] h-screen bg-slate-400 relative  overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="h-screen w-full object-cover z-0 brightness-[60%] absolute"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div
          className="herocontent w-[80%] py-20 px-20 air:px-12 m480:px-8 absolute z-10 air:w-[100%] space-y-7 m480:gap-6 text-center"
          data-aos="fade-down"
          data-aos-duration="1100"
          data-aos-once="true"
        >
          <div className="empower text-white text-lg font-mons md:text-base ">
            <p>Quality is our priority</p>
          </div>
          <div className="build">
            <h1 className="text-white text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Transforming Your Home And Office With Our Expert Renovation
              Services.
            </h1>
            {/* text-[#232323]  */}
            {/* border-[#7f7f7f] */}
            {/* text-[#28334a] */}
          </div>
          <div className="reachout font-mons font-semibold m480:font-medium">
            <a href="tel:+1 (905) 867-7502">
              <button className=" px-4 py-2 m480:px-2 m480:py-1 rounded border-[2px]  border-white text-white transition ease-in-out hover:scale-[1.03]">
                Reach Out <span>&rarr;</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="image-container flex relative z-0"> */}
      {/* <ReactPlayer
        className="image-container flex relative z-0 px-20 air:px-12 m480:px-8 -translate-y-16 w-[100%] md:w-[100%] mx-auto"
        url={heroVideo}
        playing
        muted
        loop
        controls={false}
        width="100%"
        height="100%"
      /> */}
      {/* </div> */}
    </>
  );
};

export default HeroSectionComponent;
