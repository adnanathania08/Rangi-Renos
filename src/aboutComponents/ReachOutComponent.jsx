import React from "react";

const ReachOutComponent = () => {
  return (
    <>
      <div className="mainContainer py-16 px-20 w-[100%] flex items-center air:flex-col air:gap-20 air:px-12 m480:px-8">
        <div className="herocontent w-[100%] flex flex-col gap-8 m480:gap-6 text-center">
          <div
            className="empower text-[#28334a] font-mons
           text-lg font-medium "
          >
            <p>Reach out to us</p>
          </div>
          <div className="build">
            <h1 className="text-black text-6xl font-medium font-int leading-[1.2] md:text-5xl ">
              Let's Craft Excellence Together
            </h1>
          </div>
          <div className="reachout font-int font-medium ">
            <a href="tel:+1 (905) 867-7502">
              <button className="px-4 py-2 rounded border-[2px] border-[#232323] text-[#28334a] transition ease-in-out">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReachOutComponent;
