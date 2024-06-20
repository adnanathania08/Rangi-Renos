import React from "react";
import luxkitc from "../images/luxkitc.jpg";
import bathroom from "../images/bathroom.jpg";
import basement from "../images/basement.jpg";
import { Link } from "react-router-dom";
const RenovationProjectComponent = () => {
  const plans = [
    {
      name: "Modern kitchen Makeovers Projects",
      img: (
        <img
          src={luxkitc}
          className="rounded-t-lg w-full h-full object-cover"
          alt=""
        />
      ),
      features: [
        "Modern kitchen makeovers prioritize open-concept layouts for seamless flow.",
      ],
    },
    {
      name: "Luxurious Bathroom Renovation",
      img: (
        <img
          src={bathroom}
          className="rounded-t-lg w-full h-full object-cover"
          alt=""
        />
      ),
      features: [
        "Elevate your routine with our luxurious, tailored bathroom renovations.",
      ],
    },
    {
      name: "Basement Transformation Projects",
      img: (
        <img
          src={basement}
          className="rounded-t-lg w-full h-full object-cover"
          alt=""
        />
      ),
      features: [
        "Style your basement with our expertise for cozy family dens and sophisticated entertainment.",
      ],
    },
  ];
  return (
    <>
      <div className="mainContainer py-20 w-[100%] px-20 air:px-12 m480:px-8">
        <div
          className="empower pb-4 text-[#28334a] font-mons
           text-lg font-medium text-center"
        >
          <p>View Our Renovation Projects</p>
        </div>
        <div className="text-[#000] text-5xl font-medium font-int leading-[1.2] md:text-4xl text-center">
          <p className="">
            Browse Through Our Portfolio Of Past Renovation Projects.
          </p>
        </div>
        <div
          className="my-12"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <ul className=" rounded-lg gap-y-6 flex justify-center gap-6 flex-wrap ">
            {plans.map((item, idx) => (
              <li
                key={idx}
                className="bg-white space-y-3 h-[480px] max-w-[490px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl relative"
              >
                <div className="shadow-lg h-[240px] text-xl rounded-lg flex items-center justify-center mx-auto">
                  {item.img}
                </div>
                <div className="text p-3 space-y-2">
                  <h4 className="text-xl font-int text-black font-medium">
                    {item.name}
                  </h4>
                  <p className="font-mons">{item.features}</p>
                  <div className="bottom absolute bottom-3">
                    <Link to="/homeservice">
                      <button className="text-red font-mons border border-[#28334a] hover:before:bg-[#28334a] relative overflow-hidden bg-white py-2 px-4 text-[#28334a] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white font-medium hover:before:left-0 hover:before:w-full">
                        <span className="relative z-10">Explore</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="w-full flex justify-center ">
          <button className="px-8 py-4 rounded-lg font-semibold text-sm duration-150 text-[#fff] bg-[#28334a] font-mons">
            Discover All
          </button>
        </div> */}
      </div>
    </>
  );
};

export default RenovationProjectComponent;
