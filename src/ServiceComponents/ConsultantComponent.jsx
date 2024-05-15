import React from "react";

const ConsultantComponent = () => {
  return (
    <>
      <div className="mainContainer bg-[#d6d3d1] py-16 px-20 w-[100%] flex items-center air:flex-col air:gap-20 air:px-12 m480:px-8">
        <div className="herocontent w-[100%] flex flex-col gap-8 m480:gap-6 text-center">
          <div
            className="empower text-[#7f7f7f] font- font-mons
           text-lg font-medium"
          >
            <p>Drop us a line! We are here to answer your questions 24/7</p>
          </div>
          <div className="build">
            <h1 className="text-black text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Need a consultation?
            </h1>
          </div>
          <div className="reachout font-int font-medium">
            <button className="px-4 py-2 rounded border-[2px] border-[#232323] text-[] transition ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantComponent;
