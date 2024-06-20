import React from "react";
import personalized from "../images/Rangi-Renovations-Custom-custom1.jpg";
import tailored from "../images/Rangi-Renovations-Custom-custom2.jpg";
import elegance from "../images/Rangi-Renovations-Custom-custom3.jpg";
import craftsmanship from "../images/Rangi-Renovations-Custom-custom4.jpg";
import transformation from "../images/Rangi-Renovations-Custom-custom5.jpg";
import vision from "../images/Rangi-Renovations-Custom-custom6.jpg";
import { Link } from "react-router-dom";
const CustomReno = () => {
  const features = [
    {
      icon: (
        <img
          src={personalized}
          alt="Rangi-Renovations-Custom-custom1"
          className="object-cover h-full w-full rounded-t-xl"
        />
      ),
      title: "Personalized Design",
      desc: "Our award-winning team collaborates with you to ensure every detail matches your vision and taste.",
    },
    {
      icon: (
        <img
          src={tailored}
          alt="Rangi-Renovations-Custom-custom2"
          className="object-cover h-full w-full rounded-t-xl"
        />
      ),
      title: "Tailored Solutions",
      desc: "We offer fully tailored solutions, allowing you to personalize every aspect of your home addition.",
    },
    {
      icon: (
        <img
          src={elegance}
          alt="Rangi-Renovations-Custom-custom3"
          className="object-cover h-full w-full rounded-t-xl"
        />
      ),
      title: "Blending Innovation with Timeless Elegance",
      desc: "Our design blends modern innovation with timeless elegance, ensuring your addition is stylish and enduring.",
    },
    {
      icon: (
        <img
          src={craftsmanship}
          alt="Rangi-Renovations-Custom-custom4"
          className="object-cover h-full w-full rounded-t-xl"
        />
      ),
      title: "Exceptional Craftsmanship",
      desc: "We deliver superior craftsmanship, focusing on attention to detail and quality to exceed your expectations.",
    },
    {
      icon: (
        <img
          src={transformation}
          alt="Rangi-Renovations-Custom-custom5"
          className="object-cover h-full w-full rounded-t-xl"
        />
      ),
      title: "Experience the Transformation",
      desc: "With our expertise and your personal touch, we’ll create a home that exceeds your expectations.",
    },
    {
      icon: (
        <img
          src={vision}
          alt="Rangi-Renovations-Custom-custom6"
          className="object-cover h-full w-full rounded-t-xl"
        />
      ),
      title: "Bring Your Vision to Life",
      desc: "Let us help you create a space that fulfills and surpasses your expectations. Contact us today!",
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
              Custom Additions
            </h3>
            <p className="text-black text-4xl sm:text-4xl font-int font-medium">
              Our comprehensive services encompass every aspect of Home and
              Office renovation.
            </p>
            <p className="font-mons">
              If you adore your home and office but crave more space, a custom
              addition is the perfect solution. <br /> Whether you’re looking to
              expand for roomier living, make eco-conscious upgrades, <br />
              plan for retirement, or boost resale value, additions offer
              versatile
              <br />
              benefits tailored to your specific needs.
            </p>
          </div>
          <div
            className="mt-12"
            data-aos="fade-down"
            data-aos-duration="1100"
            data-aos-once="true"
          >
            <ul className="gap-y-6 flex justify-center gap-6 flex-wrap">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 h-[480px] max-w-[490px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl relative"
                >
                  <div className="shadow-lg h-[240px] text-xl rounded-lg flex items-center justify-center mx-auto">
                    {item.icon}
                  </div>
                  <div className="text p-3 space-y-2 ">
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

export default CustomReno;
