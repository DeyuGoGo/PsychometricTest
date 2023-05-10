import React from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();
  const message = location.state && location.state.message;

  return (
    <div>
      <h1>Contact</h1>
      <p>This is the contact page.</p>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Contact;
