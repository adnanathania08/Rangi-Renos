import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const AboutUsComponent = () => {
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
      title: "Satisfaction",
      value: 100,
      sign2: "%",
    },
    {
      data: "#1",
      title: "In delivering pure profits",
      value: 1,
      sign: "#",
    },
    {
      data: "99%",
      title: "Return in pure profits",
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
        <div className="mainContainer bg-[#28334a] py-20 px-20 w-[100%] air:px-12 m480:px-8">
          <div
            className="empower pb-4 text-[#fff] font- font-mons
           text-lg font-medium text-center"
          >
            <p>About Us</p>
          </div>
          <div className="build text-center">
            <h1 className="text-[#fff] text-5xl font-medium font-int leading-[1.2] md:text-4xl">
              <span className="text-[#7f7f7f]">
                Our unwavering commitment ensures every project —&nbsp;
              </span>
              receives exceptional results, exceeding expectations with
              dedicated expertise.
            </h1>
          </div>
          <section
            className="border rounded mx-auto mt-10 p-8 m480:p-5"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-once="true"
          >
            <div className="warranty text-[#fff] space-y-3">
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
        </div>
      </ScrollTrigger>
    </>
  );
};

export default AboutUsComponent;
{
  /* <ul className="grid gap-y-6 gap-x-4 sm:grid-cols-2 grid-cols-4 air:grid-cols-2 m480:grid-cols-1 text-center">
                {stats.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-center px-4 border-x-[1px] border-[#7f7f7f] text-[#28334a] "
                  >
                    {counterOn && (
                      <CountUp
                        className="text-4xl font-int text-[#fff]"
                        start={0}
                        end={item.value}
                        duration={2.45}
                        prefix={item.sign}
                        suffix={item.sign2}
                      />
                    )}
                    <p className="mt-3 font-mons text-[#d6d3d1]">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul> */
}
