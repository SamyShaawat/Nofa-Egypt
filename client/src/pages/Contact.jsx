import React from "react";
import { Helmet } from "react-helmet";
import ContactHero from "../components/Contact Us/ContactHero.jsx";
import ContactDetails from "../components/Contact Us/ContactDetails.jsx";
import GoogleMap from "../components/Contact Us/GoogleMap.jsx";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt | Contact Us</title>
      </Helmet>
      <ContactHero />
      <ContactDetails />
      <GoogleMap />
    </>
  );
};

export default Contact;
