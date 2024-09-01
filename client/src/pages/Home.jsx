import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Home/Hero.jsx";
import Partners from "../components/Home/Partners.jsx";
import Productsbtn from "../components/Home/Productsbtn.jsx";
import Finishesbtn from "../components/Home/Finishesbtn.jsx";
import OurProducts from "../components/Home/OurProducts.jsx";
import { woodSpeciesImages } from "../data/constants.js";
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
      <Productsbtn />
      <OurProducts images={woodSpeciesImages} />
      <Finishesbtn />
      <Partners />
    </>
  );
};

export default Home;
