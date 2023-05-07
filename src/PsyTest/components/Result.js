import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Result.css';

function Result({ result }) {
  const navigate = useNavigate();

  if (!result) {
    navigate('/');
    return null;
  }

  return (
    <div className="result-container">
      <h2>你的人格類型是：{result.name}</h2>
      <p>{result.description}</p>
      
      <div className="compatibility-container">
        <div className="easy-to-get-along">
          <h3>容易相處的人格類型：</h3>
          <ul>
            {result.easy_to_get_along_with.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
        
        <div className="difficult-to-get-along">
          <h3>不容易相處的人格類型：</h3>
          <ul>
            {result.difficult_to_get_along_with.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/" className="retake-test">重新測試</Link>
    </div>
  );
}

export default Result;
