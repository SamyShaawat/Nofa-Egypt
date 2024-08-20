import React from "react";
import { Helmet } from "react-helmet";

const ControlPanel = () => {
  return (
    <>
      <Helmet>
        <title>Nofa Egypt | Control Panel</title>
      </Helmet>
      <div className="text-center text-3xl mt-60 mb-40 font-semibold min-h-[105px]">
        <h1 className="text-3xl font-bold">Control Panel</h1>
        <p className="mt-4">
          This is a protected page only accessible by logged-in users.
        </p>
      </div>
    </>
  );
};

export default ControlPanel;
