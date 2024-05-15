import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const AboutUs2Component = () => {
  const [counterOn, setCounterOn] = useState(false);
  const stats = [
    {
      data: "$4.8m",
      title: "In pure profits for our clients",
      value: 4,
      sign: "$",
      sign2: "m",
    },
    {
      data: "100%",
      title: "In pure profits for our clients",
      value: 100,
      sign2: "%",
    },
    {
      data: "#1",
      title: "In pure profits for our clients",
      value: 1,
      sign: "#",
    },
    {
      data: "99%",
      title: "In pure profits for our clients",
      value: 99,
      sign2: "%",
    },
  ];

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="mainContainer bg-white  py-20 px-20 w-[100%] air:px-12 m480:px-8">
          <div
            className="empower pb-4 text-[#28334a] font- font-mons
           text-lg font-medium text-center"
          >
            <p>About Us</p>
          </div>
          <div className="build text-center">
            <h1 className="text-black text-5xl font-medium font-int leading-[1.2] md:text-4xl">
              <span className="text-[#7f7f7f]">
                "Elevating homes with expert craftsmanship and personalized
                service –&nbsp;
              </span>
              welcome to Rangi Renos, your renovation destination
            </h1>
          </div>
          <section className=" mx-auto mt p-8 m480:p-5">
            <div className="warranty text-[#000] space-y-3">
              <p className="font-mons text-center">
                Our company is fully insured with a 5 million Canadian dollar
                insurance policy, ensuring comprehensive coverage for our
                operations. Additionally, we are certified by the Workplace
                Safety and Insurance Board (WSIB) and recognized by the
                government, guaranteeing our compliance with all necessary
                regulations and standards.
              </p>
            </div>
          </section>
          <section className="py-16">
            <div className="max-w-screen-xl mx-auto ">
              <ul className="grid gap-y-6 gap-x-4 sm:grid-cols-2 grid-cols-4 air:grid-cols-2 m480:grid-cols-1 text-center">
                {stats.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-center px-4 border-x-[1px] border-[#7f7f7f] text-[#28334a] "
                  >
                    {counterOn && (
                      <CountUp
                        className="text-4xl font-int text-[#28334a]"
                        start={0}
                        end={item.value}
                        duration={2.45}
                        prefix={item.sign}
                        suffix={item.sign2}
                      />
                    )}
                    <p className="mt-3 font-mons text-[#000]">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default AboutUs2Component;
