import React from "react";
import { Helmet } from "react-helmet";
import EventsHero from "../components/Events and Newsletter/EventsHero";
import Newsletter from "../components/Events and Newsletter/Newsletter";
import PublicEventsList from "../components/Events and Newsletter/PublicEventsList";

const EventsNewsletter = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt | Events & Newsletter</title>
      </Helmet>
      <EventsHero />
      <Newsletter />
      <div className="mt-8 mb-8">
        <PublicEventsList />
      </div>
    </>
  );
};

export default EventsNewsletter;
