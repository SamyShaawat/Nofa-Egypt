import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

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
    </>
  );
};

export default Home;
