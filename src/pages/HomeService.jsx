import React from "react";
import HeroSection3Component from "../ServiceComponents/HeroSection3Component";
import HomeReno from "../ServiceComponents/HomeReno";
import { Helmet } from "react-helmet";
const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Home Services- Rangi Renovation</title>
        <meta
          name="description"
          content="Breathe Life Back into Your Home: Top-Tier Renovation Services in Canada
Dreaming of a transformed kitchen? Yearning for a spa-like bathroom retreat? Look no further! We specialize in all aspects of home renovation, bringing your vision to life with exceptional quality and craftsmanship.
Here's what makes us your perfect renovation partner in Canada:
•	Complete Renovation Solutions: From kitchen and bathroom makeovers to basement finishing, attic conversions, and energy-efficient upgrades, we handle it all.
•	Local Expertise: We serve homeowners across Canada, with a strong presence in [Your City] and surrounding areas.
•	Stress-Free Process: Our experienced team guides you through every step, including permits, design consultations, and project management.
•	Unmatched Customer Service: We prioritize open communication, ensuring your satisfaction throughout the entire renovation journey.
Ready to transform your space? We specialize in:
•	Kitchen Renovations: Design your dream kitchen! We offer expert planning, top-quality materials, and flawless execution.
•	Bathroom Renovations: Create a luxurious bathroom oasis with custom features, high-end finishes, and meticulous attention to detail.
•	Basement Renovations: Expand your living space with a beautifully finished basement, perfect for entertaining, hobbies, or additional bedrooms.
•	Attic Conversions: Utilize unused attic space for a home office, guest room, or a fun play area for the kids.
•	Core Service: Interior Demolition, Drywall Installation & Finishing, Painting & Wallpapering, Flooring Installation, Door & Window Replacement, Trim & Molding Installation, Interior Carpentry, Plumbing Services, Electrical Services, Kitchen Renovations, Bathroom Renovations, Basement Renovations, Attic Conversions, Exterior Renovations, Landscaping Services, Permit & Approval Assistance, Universal Design (UD) Renovations, Smart Home Technology Integration.
•	Sustainable Renovations: Reduce your environmental footprint with eco-friendly materials and practices that prioritize energy efficiency.
•	Don't settle for less! 

"
        />
        <meta
          name="keywords"
          content="Home renovation Canada, renovation contractor Canada, kitchen renovation Canada, bathroom renovation Canada, basement renovation Canada, attic conversion Canada, Toronto renovation, affordable renovation Canada, sustainable renovation Canada, permit assistance Canada, plumbing services Canada, electrical services Canada, kitchen renovations Canada, bathroom renovations Canada, basement renovations Canada, attic conversions Canada, exterior renovations Canada, landscaping services Canada, permit & approval assistance Canada, universal design (UD) renovations Canada, smart home technology integration Canada, Lobby & reception renovations Canada, lighting & electrical upgrades Canada, flooring & ceiling installations Canada, technology integration Canada, soundproofing solutions Canada."
        />
        <meta name="author" content="Rangi Renovations" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Guelph, Ontario" />
        <meta name="geo.position" content="43.544804;-80.248167" />
        <meta name="ICBM" content="43.544804, -80.248167" />
      </Helmet>
      <HeroSection3Component />
      <HomeReno />
    </>
  );
};

export default ServicesPage;
