import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./contexts/authContext"; // Import AuthProvider

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [showImage, setShowImage] = useState(false);

  const handlerCertificate = () => {
    setShowImage(!showImage);
  };

  const handleClose = () => {
    setShowImage(false);
  };

  // Close the image when the Esc key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AuthProvider>
      {/* Certificate Image Overlay */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleClose}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2Fcertificate.png?alt=media&token=41d281f0-22be-4413-95b9-a4236c8504d7"
            alt="Certificate"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className={`mt-24 ${showImage ? "backdrop-blur-sm" : ""}`}>
        <Navbar />
        <Outlet />
        <Footer onCertificateClick={handlerCertificate} />
      </div>
    </AuthProvider>
  );
}

export default App;
