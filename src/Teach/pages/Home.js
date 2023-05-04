import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact', { state: { message: 'Hello from Home page!' } });
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleClick}>
        Go to Contact page with a message
      </button>
    </div>
  );
}

export default Home;
