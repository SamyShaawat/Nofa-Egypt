import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, applyActionCode } from 'firebase/auth';

const VerifyEmail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const oobCode = queryParams.get('oobCode');

  useEffect(() => {
    const auth = getAuth();
    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          // Email successfully verified
          console.log('Email verified successfully');
        })
        .catch((error) => {
          // Handle error
          console.error('Error verifying email:', error);
        });
    }
  }, [oobCode]);

  return (
    <div>
      <h1>Verify Your Email</h1>
      <p>Please wait while we verify your email...</p>
    </div>
  );
};

export default VerifyEmail;
