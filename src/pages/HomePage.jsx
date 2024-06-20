import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import ServiceComponent from "../components/ServiceComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import ContactComponent from "../components/ContactComponent";
import RenovationProjectComponent from "../components/RenovationProjectComponent";
import WhychooseUsComponent from "../components/WhychooseUsComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import { Helmet } from "react-helmet";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home- Rangi Renovation</title>
        <meta
          name="description"
          content="Breathe new life into your Canadian home or office with trusted renovation experts! We specialize in all aspects of property improvement, from full-scale kitchen and bathroom remodels to basement finishing, attic conversions, and energy-efficient upgrades.
Looking for a reliable renovation contractor in Canada? Look no further! We serve homeowners across the country, including major cities like Toronto, Brampton, Mississauga, Ottawa, and in entire Ontario.
Tired of outdated spaces? We can transform your dream project into reality, whether it's a luxurious bathroom renovation with heated floors and custom tile installation or an affordable kitchen refresh with refaced cabinets and new countertops. Need a modern upgrade for your office space? We can handle that too! 
Need help navigating permits and approvals for your addition, deck, other outdoor project, or office renovation? Our experienced team will guide you through the process, ensuring a stress-free renovation experience. We also offer financing options to make your dream space a reality. 
Thinking green? We specialize in sustainable renovations, incorporating eco-friendly materials and practices.
Don't settle for less! Contact us today for a free consultation and experience the difference a professional renovation can make. We'll bring your vision to life with exceptional quality, craftsmanship, and customer service.
"
        />
        <meta
          name="keywords"
          content="Home renovation Canada, renovation contractor Canada, kitchen renovation Canada, bathroom renovation, basement renovation, home improvement, office Renovation Canada, office improvement Ontario, Brampton renovation, affordable renovation Canada, sustainable renovation Canada, permit assistance Canada, renovation financing Canada, kitchen cabinet refacing Canada, affordable kitchen Toronto, Toronto renovation Contractor, custom tile installation Canada, countertop installation Canada. Home renovation Brampton, Toronto, Scarborough, Mississauga, Pickering, Ottawa, Montreal, Oshawa, North York, renovation contractor Brampton, renovation contractor Toronto, renovation contractor Scarborough, renovation contractor Mississauga, renovation contractor Pickering, renovation contractor Ottawa, renovation contractor Montreal, renovation contractor Oshawa, renovation contractor North York,"
        />
        <meta name="author" content="Rangi Renovations" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Guelph, Ontario" />
        <meta name="geo.position" content="43.544804;-80.248167" />
        <meta name="ICBM" content="43.544804, -80.248167" />
      </Helmet>
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
