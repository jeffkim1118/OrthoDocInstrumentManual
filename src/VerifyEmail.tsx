import React, { useEffect, useState } from 'react';

const VerifyEmail = ({ match }:any) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`/verify_email/${match.params.token}`);
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
      }
    };

    verifyEmail();
  }, [match.params.token]);

  return (
    <div>
      <h1>Email Verification</h1>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;