import React from "react";
import plumbing from "../images/bathroomRenovs.jpg";
import flooring from "../images/basementReno.jpg";
import partitions from "../images/kitchenhom.jpg";
import dropceiling from "../images/homefloor.jpg";
import carpentry from "../images/housecolor.jpg";
import hardwoodstairs from "../images/plumbingg.jpg";
import { Link } from "react-router-dom";
const HomeReno = () => {
  const features = [
    {
      icon: <img src={plumbing} alt="" className=" rounded-t-xl object-cover h-full w-full " />,
      title: "Bathroom Renovations",
      desc: "Expert plumbing solutions tailored to your needs, ensuring optimal functionality and efficiency for your home.",
    },
    {
      icon: <img src={flooring} alt="" className=" rounded-t-xl object-cover h-full w-full " />,
      title: " Legal Basement",
      desc: "Premium flooring options to suit your style and practical needs, elevating the ambiance of every room.",
    },
    {
      icon: <img src={partitions} alt="" className=" rounded-t-xl object-cover h-full w-full " />,
      title: "Kitchen Renovations",
      desc: "Customized partition designs creating versatile spaces, blending functionality with seamless integration into your home's layout.",
    },
    {
      icon: <img src={dropceiling} alt="" className=" rounded-t-xl object-cover h-full w-full " />,
      title: "Flooring",
      desc: "Innovative drop ceiling installations providing versatility and aesthetics, optimizing lighting and acoustics for your space.",
    },
    {
      icon: <img src={carpentry} alt="" className=" rounded-t-xl object-cover h-full w-full " />,
      title: "Painting",
      desc: "Exquisite craftsmanship in every detail, transforming your space with bespoke carpentry solutions and finishes.",
    },
    {
      icon: <img src={hardwoodstairs} alt="" className=" rounded-t-xl object-cover h-full w-full " />,
      title: "Plumbing",
      desc: "Elegant and durable hardwood stair installations, enhancing the aesthetic appeal and functionality of your home.",
    },
  ];

  return (
    <>
      <section className=" py-16 ">
        <div className=" px-20 air:px-12 m480:px-8">
          <div className="text-center space-y-3">
            <h3
              className=" text-[#28334a] font-mons
               text-lg font-medium"
            >
              Home Renovations
            </h3>
            <p className="text-black text-4xl sm:text-4xl font-int font-medium">
              Our Comprehensive Services Cover Every Aspect Of Home Improvement.
            </p>
            <p className="font-mons">
              Our comprehensive suite of services is meticulously designed to
              address and elevate <br /> every single aspect and component of
              your home improvement endeavors, ensuring <br /> a fully
              encompassing and transformative experience.
            </p>
          </div>
          <div
            className="mt-12"
            data-aos="fade-down"
            data-aos-duration="1100"
            data-aos-once="true"
          >
            <ul className="gap-y-6 flex justify-center gap-6 flex-wrap ">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 h-[480px] max-w-[490px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl relative"
                >
                  <div className="shadow-lg h-[240px] text-xl rounded-lg flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                  <div className="text p-3 space-y-2">
                    <h4 className="text-xl font-int text-black font-medium">
                      {item.title}
                    </h4>
                    <p className="font-mons">{item.desc}</p>
                    <div className="bottom absolute bottom-3">
                      <Link to="/contact">
                        <button className="text-red font-mons border border-[#28334a] hover:before:bg-[#28334a] relative overflow-hidden bg-white py-2 px-4 text-[#28334a] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-white font-medium hover:before:left-0 hover:before:w-full">
                          <span className="relative z-10">Book Us</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeReno;
