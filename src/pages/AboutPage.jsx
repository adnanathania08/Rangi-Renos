import React from "react";
import HeroSection2Component from "../aboutComponents/HeroSection2Component";
import AboutUs2Component from "../aboutComponents/AboutUs2Component";
import ImageSectionComponent from "../aboutComponents/ImageSectionComponent";
import ReachOutComponent from "../aboutComponents/ReachOutComponent";
import { Helmet } from "react-helmet";
const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us- Rangi Renovation</title>
        <meta
          name="description"
          content="Transform your Canadian living or work space with our expert renovation services! We offer a complete range of solutions, from kitchen and bathroom makeovers to basement finishing and eco-friendly upgrades. Let our team bring your vision to life!
Rangi renovation - Your Trusted Renovation Partner in Canada. We cater to residential and commercial projects across the country, including [Your City] and surrounding areas.
Looking for a specific service? We specialize in:
•	Kitchen Renovations: Design and build your dream kitchen with top-quality materials and craftsmanship.
•	Bathroom Renovations: Create a spa-like retreat with luxurious features and custom touches.
•	Basement Renovations: Expand your living space with a finished basement, perfect for entertaining or relaxation.
•	[Insert additional core services offered here (e.g., Attic Conversions, Office Renovations)]
•	Sustainable Renovations: Reduce your environmental impact with eco-friendly materials and practices.
•	Permit Assistance: Navigate the permitting process with ease and ensure a smooth renovation experience.
•	Financing Options: Make your dream renovation a reality with flexible financing solutions.
Ready to get started? Contact us today for a free consultation and experience the difference quality renovations can make.

"
        />
        <meta
          name="keywords"
          content="Renovation services Canada, Toronto renovation services, kitchen renovation Canada, bathroom renovation Canada, basement renovation Canada, Interior demolition Canada, drywall installation & finishing Canada, painting & wallpapering Canada, flooring installation Canada, door & window replacement Canada, trim & molding installation Canada, interior carpentry Canada, plumbing services Canada, electrical services Canada, kitchen renovations Canada, bathroom renovations Canada, basement renovations Canada, attic conversions Canada, exterior renovations Canada, landscaping services Canada, permit & approval assistance Canada, universal design (UD) renovations Canada, smart home technology integration Canada, Lobby & reception renovations Canada, lighting & electrical upgrades Canada, flooring & ceiling installations Canada, technology integration Canada, soundproofing solutions Canada, custom millwork & built-ins Canada, signage & wayfinding Canada, painting & wallcoverings Canada, sustainable renovation Canada, permit assistance Canada, renovation financing Canada, Home renovation Brampton, Toronto, Scarborough, Mississauga, Pickering, Ottawa, Montreal, Oshawa, North York, renovation contractor Brampton, renovation contractor Toronto, renovation contractor Scarborough, renovation contractor Mississauga, renovation contractor Pickering, renovation contractor Ottawa, renovation contractor Montreal, renovation contractor Oshawa, renovation contractor North York."
        />
        <meta name="author" content="Rangi Renovations" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Guelph, Ontario" />
        <meta name="geo.position" content="43.544804;-80.248167" />
        <meta name="ICBM" content="43.544804, -80.248167" />
      </Helmet>
      <HeroSection2Component />
      <AboutUs2Component />
      <ImageSectionComponent />
      <ReachOutComponent />
    </>
  );
};

export default AboutPage;
