import React from "react";
import OfficeReno from "../ServiceComponents/OfficeReno";
import HeroSectionOff from "../ServiceComponents/HeroSectionOff";
import { Helmet } from "react-helmet";
const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Office Services- Rangi Renovation</title>
        <meta
          name="description"
          content="Upgrade Your Workspace: Reimagine Your Office with Expert Renovations
Is your office space feeling outdated, uninspiring, or simply not meeting your needs? It's time for a refresh! We specialize in transforming commercial spaces across Canada, creating modern, functional, and inspiring workplaces that empower your team and impress your clients.
Here's why we're the perfect partner for your office renovation:
•	Experienced & Certified: Our team of skilled professionals is equipped to handle projects of all sizes and complexities, ensuring a smooth and successful renovation.
•	Space Optimization Experts: We maximize your existing space to create a layout that promotes collaboration, productivity, and a positive work environment.
•	Focus on Sustainability: We incorporate eco-friendly materials and practices into your renovation, minimizing environmental impact and creating a healthier workspace.
•	Seamless Project Management: Our dedicated team keeps you informed every step of the way, from initial planning to final completion.
We specialize in a range of office renovation services, including:
•	Open Office Design: Foster collaboration and communication with a bright, open floor plan.
•	Private Office Construction: Create dedicated workspaces for focused productivity.
•	Meeting Room Renovations: Design modern, technology-equipped meeting spaces for effective collaboration.
•	Break Room Makeovers: Enhance employee morale and create a relaxing space with a comfortable break room upgrade.
•	Core Services: Lobby & Reception Renovations, Lighting & Electrical Upgrades, Flooring, Ceiling Installations, Technology Integration, Soundproofing Solutions, Custom Millwork & Built-Ins, Signage & Wayfinding, Painting & Wallcoverings 
•	ADA Compliance Renovations: Ensure your office is accessible to everyone with code-compliant modifications.
Invest in your company's success. Contact us today for a free consultation and let's discuss your vision for a revitalized office space. We'll create a functional, aesthetically pleasing, and inspiring environment that reflects your brand and fuels your team's potential.


"
        />
        <meta
          name="keywords"
          content="Office renovation Canada, commercial renovation Canada, Toronto office renovation, office space optimization Canada, sustainable office renovation Canada, open office design Canada, private office construction Canada, meeting room renovation Canada, break room renovation Canada, ADA compliant renovation Canada. Interior demolition Canada, drywall installation & finishing Canada, painting & wallpapering Canada, flooring installation Canada, door & window replacement Canada, trim & molding installation Canada, interior carpentry Canada, plumbing services Canada, electrical services Canada, kitchen renovations Canada, bathroom renovations Canada, basement renovations Canada, attic conversions Canada, exterior renovations Canada, landscaping services Canada, permit & approval assistance Canada, universal design (UD) renovations Canada, smart home technology integration Canada, Lobby & reception renovations Canada, lighting & electrical upgrades Canada, flooring & ceiling installations Canada, technology integration Canada, soundproofing solutions Canada, custom millwork & built-ins Canada, signage & wayfinding Canada, painting & wallcoverings Canada.

"
        />
        <meta name="author" content="Rangi Renovations" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Guelph, Ontario" />
        <meta name="geo.position" content="43.544804;-80.248167" />
        <meta name="ICBM" content="43.544804, -80.248167" />
      </Helmet>
      <HeroSectionOff />
      <OfficeReno />
    </>
  );
};

export default ServicesPage;
