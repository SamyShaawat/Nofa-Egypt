import React from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../components/About Us/AboutHero";
import WhoWeAre from "../components/About Us/WhoWeAre";
import Mission from "../components/About Us/Mission";
import Vision from "../components/About Us/Vision";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt | About Us</title>
      </Helmet>
      {/* className="text-center text-3xl mt-64 font-semibold min-h-[105px]" */}
      <div className="mt-24">
        <AboutHero />
        <WhoWeAre />
        <Mission />
        <Vision />
      </div>
    </>
  );
};

export default About;
