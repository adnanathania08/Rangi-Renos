import React from "react";
import Bathroom from "../images/Rangi-Renovations-Services-Home-services-Home-Renovations-Bathroom-Renovations.jpg";
import Basement from "../images/Rangi-Renovations-Services-Home-services-Home-Renovations-Legal-Basement.jpg";
import Kitchen from "../images/Rangi-Renovations-Services-Home-services-Home-Renovations-Kitchen-Renovations.jpg";
import Flooring from "../images/Rangi-Renovations-Services-Home-services-Home-Renovations-Flooring.jpg";
import Painting from "../images/Rangi-Renovations-Services-Home-services-Home-Renovations-Painting.jpg";
import Plumbing from "../images/Rangi-Renovations-Services-Home-services-Home-Renovations-Plumbing.jpg";
import { Link } from "react-router-dom";
const HomeReno = () => {
  const features = [
    {
      icon: (
        <img
          src={Bathroom}
          alt="Bathroom-Renovations"
          className=" rounded-t-xl object-cover h-full w-full "
        />
      ),
      title: "Bathroom Renovations",
      desc: "Expert plumbing solutions tailored to your needs, ensuring optimal functionality and efficiency for your home.",
    },
    {
      icon: (
        <img
          src={Basement}
          alt="Legal-Basement"
          className=" rounded-t-xl object-cover h-full w-full "
        />
      ),
      title: " Legal Basement",
      desc: "Premium flooring options to suit your style and practical needs, elevating the ambiance of every room.",
    },
    {
      icon: (
        <img
          src={Kitchen}
          alt="Kitchen-renovation"
          className=" rounded-t-xl object-cover h-full w-full "
        />
      ),
      title: "Kitchen Renovations",
      desc: "Customized partition designs creating versatile spaces, blending functionality with seamless integration into your home's layout.",
    },
    {
      icon: (
        <img
          src={Flooring}
          alt="Flooring"
          className=" rounded-t-xl object-cover h-full w-full "
        />
      ),
      title: "Flooring",
      desc: "Innovative drop ceiling installations providing versatility and aesthetics, optimizing lighting and acoustics for your space.",
    },
    {
      icon: (
        <img
          src={Painting}
          alt="Painting"
          className=" rounded-t-xl object-cover h-full w-full "
        />
      ),
      title: "Painting",
      desc: "Exquisite craftsmanship in every detail, transforming your space with bespoke carpentry solutions and finishes.",
    },
    {
      icon: (
        <img
          src={Plumbing}
          alt="Plumbing"
          className=" rounded-t-xl object-cover h-full w-full "
        />
      ),
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
