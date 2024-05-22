import React from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };

  return (
    // Important! Always set the container height explicitly
    // <div className="mainContainer pt-4 pb-16 air:py-0 air:pt-12 air:pb-16 w-[100%] px-20 air:px-12 m480:px-8">
    //   <div style={{ height: "100vh", width: "100%" }}>
    //     <GoogleMapReact
    //       bootstrapURLKeys={{ key: "" }}
    //       defaultCenter={defaultProps.center}
    //       defaultZoom={defaultProps.zoom}
    //     >
    //       <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    //     </GoogleMapReact>
    //   </div>
    // </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11566.107196946832!2d-80.29687240468286!3d43.55390496724681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b907673ec2217%3A0x91df120ee1d7ddd6!2s28%20Brentwood%20Dr%2C%20Guelph%2C%20ON%20N1H%205M7%2C%20Canada!5e0!3m2!1sen!2sin!4v1716355008216!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
