import React from "react";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
const ImageSectionComponent = () => {
  return (
    <>
      <div className="mainContainer bg-[#28334a] py-16 px-20 w-[100%] air:px-12 m480:px-8 overflow-hidden">
        <div className="imageContainer flex w-[100%]">
          <img
            src={about2}
            className="w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          />
          <img
            src={about3}
            className="w-[50%] p-[5vw]"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-once="true"
          />
        </div>
      </div>
      {/* air:p-10 p-14 md:p-9 sm2:p-6 m480:p-4 */}
    </>
  );
};

export default ImageSectionComponent;
