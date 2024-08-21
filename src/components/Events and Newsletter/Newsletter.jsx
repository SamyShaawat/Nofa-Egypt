import React, { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    // Define the action code settings
    const actionCodeSettings = {
      url: "https://www.nofaegypt.com/verify-email", // Ensure this URL is authorized in Firebase Console
      handleCodeInApp: true,
    };

    try {
      // Send a sign-in link to the user's email
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      
      // Save the email locally to complete the sign-in process later
      window.localStorage.setItem("emailForSignIn", email);

      // Provide user feedback
      setMessage("Verification email sent! Please check your inbox.");
      setEmail(""); // Clear the input
    } catch (error) {
      // Log detailed error information
      console.error("Error sending verification email: ", error.message);
      setMessage("Error sending verification email.");
    }
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
        {message && (
          <p className="text-center mt-4 text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
