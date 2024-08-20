import React from "react";
import { Helmet } from "react-helmet";
import EventsHero from "../components/Events and Newsletter/EventsHero";
import Newsletter from "../components/Events and Newsletter/Newsletter";

const EventsNews = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt | Events & News</title>
      </Helmet>
      <EventsHero />
      <Newsletter />
    </>
  );
};

export default EventsNews;
