import React, { useState } from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const verificationLink = `${
      window.location.origin
    }/verify-email?email=${encodeURIComponent(email)}&token=${btoa(email)}`;

    const templateParams = {
      email_address: email,
      verification_link: verificationLink,
    };

    try {
      // Send verification email using EmailJS
      await emailjs.send(
        "service_vo4ojzm",
        "template_j3bkaxj",
        templateParams,
        "V-7vGAniLRldJKTD0"
      );

      setMessage("Verification email sent! Please check your inbox or your spam");
      setEmail("");
    } catch (error) {
      console.error("Error sending verification email: ", error);
      setError("Error sending verification email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-md bg-white p-6 rounded-md">
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
            className="w-full md:w-1/4 lg:w-1/5 py-2 bg-primary text-white rounded-md hover:bg-primary/80 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {!loading && message && (
          <div className="mt-4 p-4 bg-green-100 text-green-700">{message}</div>
        )}
        {!loading && error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
