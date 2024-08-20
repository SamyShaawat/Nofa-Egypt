import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-md bg-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-md flex-grow md:flex-grow-0 md:w-3/4 lg:w-4/5 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full md:w-1/4 lg:w-1/5 py-2 bg-primary text-white rounded-md hover:bg-primary/80"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
