import React from "react";
import { BiSolidCustomize } from "react-icons/bi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaPencilRuler } from "react-icons/fa";
import exper from "../images/exper.jpg";
import crfts from "../images/crfts.jpg";
import comm from "../images/comm.jpg";

const WhychooseUsComponent = () => {
  const options = [
    {
      icon: <img src={exper} alt="" className=" rounded-t-xl" />,
      title: "Expertise",
      desc: "With years of experience in the industry, our team brings a wealth of expertise and knowledge to every project we undertake.",
    },
    {
      icon: <img src={crfts} alt="" className=" rounded-t-xl" />,
      title: "Quality Craftsmanship",
      desc: " We take pride in our attention to detail and commitment to quality craftsmanship, ensuring that every aspect of your renovation is completed to the highest standards.",
    },
    {
      icon: <img src={comm} alt="" className=" rounded-t-xl" />,
      title: "Transparent Communication",
      desc: "We'll keep you informed and involved throughout the entire renovation process, ensuring that your vision is brought to life exactly as you imagined.",
    },
  ];
  return (
    <>
      <div className="mainContainer bg-[#28334a] py-20 px-20 w-[100%] air:px-12 m480:px-8">
        <div className="space-y-3 text-center text-[#fff]">
          <h3
            className="font-mons
           text-lg font-medium "
          >
            Why Choose Us ?
          </h3>
          <p className="text-4xl sm:text-4xl font-int font-medium ">
            Expert Advice: The Ultimate Guide to <br />
            Home Renovation
          </p>
          <p className="font-mons">
            Our company is fully insured with a 5 million Canadian dollar
            insurance policy, ensuring comprehensive <br /> coverage for our
            operations. Additionally, we are certified by the Workplace Safety
            and <br /> Insurance Board (WSIB) and recognized by the government,
            guaranteeing
            <br /> our compliance with all necessary regulations and standards.
          </p>
        </div>
        <div
          className="threeOptions pt-12 grid gap-y-8 gap-x-12 lg:gap-x-4 air:gap-x-6 air:grid-cols-2 grid-cols-3 m480:grid-cols-1"
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-once="true"
        >
          {options.map((item, idx) => (
            <div
              key={idx}
              className="options bg-[#fff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl "
            >
              <div className="icon">{item.icon}</div>
              <div className="text p-3 space-y-2">
                <p className="title text-xl font-int font-medium">
                  {item.title}
                </p>
                <p className="description  font-mons">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* bg-[#d6d3d1] */}
      </div>
    </>
  );
};

export default WhychooseUsComponent;
