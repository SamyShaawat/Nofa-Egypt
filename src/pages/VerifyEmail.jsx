import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, applyActionCode } from "firebase/auth";
import { FiCheckCircle } from "react-icons/fi"; // Import the check icon from react-icons

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const oobCode = queryParams.get("oobCode");

  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isVerified, setIsVerified] = useState(false); // Verification state

  useEffect(() => {
    const auth = getAuth();
    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          setIsLoading(false); // Stop loading
          setIsVerified(true); // Set verified to true
          // Redirect to the control panel or another page after successful verification
          setTimeout(() => {
            navigate("/control-panel");
          }, 2000); // Redirect after 2 seconds
        })
        .catch((error) => {
          setIsLoading(false); // Stop loading if there's an error
          console.error("Error verifying email:", error.message);
          alert("An error occurred while verifying the email.");
        });
    } else {
      setIsLoading(false); // Stop loading if no code is provided
      alert("Invalid or missing verification code.");
    }
  }, [oobCode, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Verify Your Email
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Please wait while we verify your email...
      </p>
      {isLoading ? (
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div> // Loading spinner
      ) : isVerified ? (
        <FiCheckCircle className="text-green-500 text-6xl" /> // Green check icon
      ) : (
        <p className="text-red-500">Verification failed. Please try again.</p>
      )}
    </div>
  );
};

export default VerifyEmail;
