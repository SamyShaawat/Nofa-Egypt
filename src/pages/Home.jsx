import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Productsbtn from "../components/Productsbtn";
import OurProducts from "../components/OurProducts";
import { woodSpeciesImages } from "../data/constants";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt</title>
      </Helmet>
      {/* <div className="text-center text-3xl mt-64 font-semibold min-h-[500px]">
        Home Page
      </div> */}
      <Hero />
      <Partners />
      <OurProducts images={woodSpeciesImages} />
      <Productsbtn />
    </>
  );
};

export default Home;
