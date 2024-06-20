import React from "react";
import HeroSection4 from "../ContactComponents/HeroSection4Component";
import ContactUsComponent from "../ContactComponents/ContactUsComponent";
import SimpleMap from "../ContactComponents/GoogleMap";
import { Helmet } from "react-helmet";
const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us- Rangi Renovation</title>
        <meta
          name="description"
          content="Let's Get Started on Your Dream Renovation!
Ready to transform your home or office in Canada? We're excited to hear from you! Our friendly and knowledgeable team is here to answer your questions, discuss your project in detail, and provide a free consultation.
Here are a few ways to get in touch:
•	Call us: Reach us directly at +1 (905) 867-7502 to speak with a renovation specialist.
•	Fill out our contact form: Simply provide your details and a brief description of your project in the form below. We'll get back to you promptly.
•	Email us: Send your inquiries to rangijag84@gmail.com,
We look forward to working with you!

"
        />
        <meta
          name="keywords"
          content="Home renovation Canada, renovation contractor Canada, office renovation Canada, commercial renovation Canada, custom renovation Canada, home improvement Canada, interior renovation Canada, Home renovation Brampton, Toronto, Scarborough, Mississauga, Pickering, Ottawa, Montreal, Oshawa, North York, renovation contractor Brampton, renovation contractor Toronto, renovation contractor Scarborough, renovation contractor Mississauga, renovation contractor Pickering, renovation contractor Ottawa, renovation contractor Montreal, renovation contractor Oshawa, renovation contractor North York, Interior demolition Canada, drywall installation & finishing Canada, painting & wallpapering Canada, flooring installation Canada, door & window replacement Canada, trim & molding installation Canada, interior carpentry Canada, plumbing services Canada, electrical services Canada, kitchen renovations Canada, bathroom renovations Canada, basement renovations Canada, attic conversions Canada, exterior renovations Canada, landscaping services Canada, permit & approval assistance Canada, universal design (UD) renovations Canada, smart home technology integration Canada, Lobby & reception renovations Canada, lighting & electrical upgrades Canada, flooring & ceiling installations Canada, technology integration Canada, soundproofing solutions Canada, custom millwork & built-ins Canada, signage & wayfinding Canada, painting & wallcoverings Canada, North America renovation, Ontario renovation, custom millwork Canada, built-in furniture Canada, accessible bathroom renovations Canada, barrier-free shower installation Canada, outdoor kitchen installation Canada, deck construction Canada, patio renovations Canada, interlocking stone installation Canada, irrigation system installation Canada, fireplace installation Canada, built-in entertainment center Canada, home theater system installation Canada, security system installation Canada, smart thermostat Canada, tankless water heater installation Canada."
        />
        <meta name="author" content="Rangi Renovations" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Guelph, Ontario" />
        <meta name="geo.position" content="43.544804;-80.248167" />
        <meta name="ICBM" content="43.544804, -80.248167" />
      </Helmet>
      <HeroSection4 />
      <ContactUsComponent />
      <SimpleMap />
    </>
  );
};

export default ContactPage;
