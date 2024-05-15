import React from "react";
import { useState } from "react";

const TestimonialComponent = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Teacher",
      quote:
        "Rangi Renos did an amazing job renovating our kitchen. Professional, skilled, and highly recommended!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "Our bathroom renovation by Rangi Renos was flawless. Excellent communication and stunning results. Very satisfied!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "Civil Engineer",
      quote:
        "Rangi Renos transformed our basement beautifully. Professional, efficient, and top-quality workmanship. Highly impressed! ",
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <>
      <section className="py-20">
        <div className="max-w-screen-xl px-20 air:px-12 m480:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-[] font-mons
           text-lg font-medium pb-6"
            >
              What people are saying
            </h3>
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial == idx ? (
                  <li key={idx} className="bg-[#d6d3d1] p-3 rounded-lg">
                    <figure>
                      <blockquote>
                        <p className="text-black text-3xl sm:text-4xl font-int font-medium">
                          “{item.quote}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.avatar}
                          className="w-16 h-16 mx-auto rounded-full"
                        />
                        <div className="mt-3">
                          <span className="block text-gray-800 font-semibold font-mons">
                            {item.name}
                          </span>
                          <span className="block font-mons text-gray-600 text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 focus:ring ${
                      currentTestimonial == idx
                        ? "bg-[#28334a]"
                        : "bg-[#d6d3d1]"
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialComponent;
