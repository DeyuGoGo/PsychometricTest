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
      <img src={result.imageUrl} alt={result.name} className="result-image"/>
      <p>{result.description}</p>
      
      <div className="compatibility-container">
        <div className="easy-to-get-along">
          <h3>容易相處的人格類型：</h3>
          {result.easy_to_get_along_with.map((type) => (
            <div key={type.name} className="compatibility-item">
              <img src={type.imageUrl} alt={type.name} className="compatibility-image"/>
              <p>{type.name}</p>
            </div>
          ))}
        </div>
        
        <div className="difficult-to-get-along">
          <h3>不容易相處的人格類型：</h3>
          {result.difficult_to_get_along_with.map((type) => (
            <div key={type.name} className="compatibility-item">
              <img src={type.imageUrl} alt={type.name} className="compatibility-image"/>
              <p>{type.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Link to="/" className="retake-test">重新測試</Link>
    </div>
  );
}

export default Result;
