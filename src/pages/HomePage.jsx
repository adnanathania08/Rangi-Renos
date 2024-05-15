import React from "react";
// import NavbarComponent from "../components/NavbarComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
import ServiceComponent from "../components/ServiceComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import ContactComponent from "../components/ContactComponent";
// import FooterComponent from "../components/FooterComponent";
import RenovationProjectComponent from "../components/RenovationProjectComponent";
import WhychooseUsComponent from "../components/WhychooseUsComponent";
import TestimonialComponent from "../components/TestimonialComponent";
const HomePage = () => {
  return (
    <>
      {/* <NavbarComponent /> */}
      <HeroSectionComponent />
      <ServiceComponent />
      <AboutUsComponent />
      <RenovationProjectComponent />
      <WhychooseUsComponent />
      <TestimonialComponent />
      <ContactComponent />
      {/* <FooterComponent /> */}
    </>
  );
};

export default HomePage;
