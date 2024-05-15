import React from "react";

import ktcramo from "../images/ktcramo.jpg";
import bthreno from "../images/bthreno.jpg";
import homadd from "../images/homadd.jpg";
// import bsef from "../images/bsef.jpg";
// import iremo from "../images/iremo.jpg";
// import xreno from "../images/xreno.jpg";
import carpentry from "../images/carpentry2.jpg";
import hardwood from "../images/hardwoodstrs2.jpg";
import partitions from "../images/partitions2.jpg";
import { Link } from "react-router-dom";

const ServiceComponent = () => {
  const features = [
    {
      Image: (
        <img
          src={ktcramo}
          className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
          alt="kitchen remodeling"
        />
      ),
      title: "KITCHEN REMODELING",
      desc: "Crafting functional, beautiful kitchen spaces that make homes truly special.",
    },
    {
      Image: (
        <img
          src={bthreno}
          className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
          alt="Bathroom Renovations"
        />
      ),
      title: "BATHROOM RENOVATIONS",
      desc: "Transforming bathrooms into stylish, functional retreats for every need.",
    },
    {
      Image: (
        <img
          src={homadd}
          className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
          alt="Home Additions"
        />
      ),
      title: "HOME ADDITIONS",
      desc: "Adding a bedroom? We'll seamlessly integrate it into your home's design.",
    },
    {
      Image: (
        <img
          src={hardwood}
          className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
          alt="HARDWOOD STAIRS"
        />
      ),
      title: "HARDWOOD STAIRS",
      desc: "Enhance home elegance with our durable hardwood stairs.",
    },
    {
      Image: (
        <img
          src={partitions}
          className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
          alt="PARTITIONS"
        />
      ),
      title: "PARTITIONS",
      desc: "Enhance home elegance with our durable hardwood stairs.",
    },
    {
      Image: (
        <img
          src={carpentry}
          className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
          alt="CARPENTRY"
        />
      ),
      title: "CARPENTRY",
      desc: "Enhance home elegance with our durable hardwood stairs.",
    },
    // {
    //   Image: (
    //     <img
    //       src={bsef}
    //       className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
    //       alt="Basement Finishing"
    //     />
    //   ),
    // title: "BASEMENT FINISHING",
    //   desc: "Transforming basements into tailored, inviting and functional living spaces.",
    // },
    // {
    //   Image: (
    //     <img
    //       src={iremo}
    //       className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken"
    //       alt="Interior Remodeling"
    //     />
    //   ),
    //   title: "INTERIOR REMODELING",
    //   desc: "Elevate your home's beauty and comfort with our interior remodeling services.",
    // },
    // {
    //   Image: (
    //     <img
    //       src={xreno}
    //       className=" h-full air:w-full object-cover rounded-lg brightness-[80%] bg-blend-darken	"
    //       alt="Exterior Renovations"
    //     />
    //   ),
    //   title: "EXTERIOR RENOVATION",
    //   desc: "Boost your home's exterior with siding, windows, roofing, decks.",
    // },
  ];

  return (
    <section className="py-20">
      <div className=" px-20 air:px-12 m480:px-8">
        <div className="text-center space-y-4 ">
          <h3
            className=" text-[#28334a] font- font-mons
           text-lg font-medium"
          >
            Services
          </h3>
          <p className="text-black text-4xl sm:text-4xl font-int font-medium">
            Empowering Your Home's Evolution
          </p>
          <p className="font-mons">
            Welcome to our home renovation hub, where every wall holds the
            promise of transformation and <br /> every corner whispers of
            possibility. Step inside and embark on a journey of renewal, where
            your <br /> vision guides every brushstroke and every nail. Let's
            redefine your home, together.
          </p>
        </div>
        <div
          className="mt-12"
          // data-aos="fade-down"
          // data-aos-duration="1100"
          // data-aos-once="true"
        >
          <ul className="grid grid-cols-[1fr,1fr,1.5fr] gap-4 air:grid-cols-1">
            {features.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className=" object-cover rounded h-[350px] relative bg-blend-darken hover:bg-[#d6d3d1]"
              >
                {/* bg-[#d6d3d1] */}
                <div className=" mx-auto h-full air:w-full bg-blend-saturation">
                  {item.Image}
                </div>
                <div className="text absolute left-0 top-5 text-white p-3 space-y-4 drop-shadow-xl">
                  <h4 className="text-sm font-mons font-semibold tracking-widest dark:text-white">
                    {item.title}
                  </h4>
                  <p className=" text-[26px] leading-8 sm:text-4xl m480:text-3xl font-int font-medium dark:text-white">
                    {item.desc}
                  </p>
                </div>
                <div className="btn absolute bottom-0 left-1 m-3">
                  <Link to="/homeservice">
                    <button className="text-red font-mons hover:before:bg-[#28334a] relative overflow-hidden bg-white py-2 px-4 text-[#28334a] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white font-medium hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Explore</span>
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <ul className="grid mt-6 grid-cols-[1.5fr,1fr,1fr] gap-4 air:grid-cols-1 ">
            {features.slice(3).map((item, idx) => (
              <li
                key={idx}
                className=" object-cover rounded h-[350px] relative bg-blend-darken	"
              >
                {/* bg-[#d6d3d1] */}
                <div className=" mx-auto h-full air:w-full bg-blend-saturation">
                  {item.Image}
                </div>
                <div className="text absolute left-0 top-5 text-white p-3 space-y-4  ">
                  <h4 className="text-sm font-mons tracking-widest font-semibold drop-shadow-xl dark:text-white">
                    {item.title}
                  </h4>
                  <p className=" text-[26px] leading-8 sm:text-4xl m480:text-3xl font-int font-medium drop-shadow-xl dark:text-white">
                    {item.desc}
                  </p>
                </div>
                <div className="btn absolute bottom-0 left-1 m-3">
                  <Link to="/officeservice">
                    <button className="text-red font-mons hover:before:bg-[#28334a] relative overflow-hidden bg-white py-2 px-4 text-[#28334a] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white font-medium hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Explore</span>
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          {/* border-[2px] border-[#DCDBDB] */}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
