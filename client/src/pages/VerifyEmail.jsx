import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const email = urlParams.get("email");
      const token = urlParams.get("token");

      if (!email || !token || token !== btoa(email)) {
        setMessage("Invalid or expired verification link.");
        setLoading(false);
        return;
      }

      try {
        const emailQuery = query(
          collection(db, "nofa_egypt_mail_list"),
          where("email", "==", email)
        );
        const emailSnapshot = await getDocs(emailQuery);

        if (!emailSnapshot.empty) {
          setMessage("This email address is already verified.");
        } else {
          await addDoc(collection(db, "nofa_egypt_mail_list"), {
            email,
          });

          setMessage(
            "Email verified successfully! You have been added to our mailing list."
          );
        }

        setTimeout(() => navigate("/"), 5000);
      } catch (error) {
        console.error("Error verifying email: ", error);
        setMessage("Error verifying email. Please try again later.");
      }

      setLoading(false);
    };

    verifyEmail();
  }, [db, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
        {loading ? (
          <div className="flex justify-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
