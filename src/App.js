import React from 'react';
import logo from './logo.svg';
import './App.css';

import axiosInstance from './axiosConfig';


function App() {
  async function sendPostRequest() {
    const url = '/v1/chat/completions';
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
            "role": "user",
            "content": "1234 Main StApt 42"
        }
      ]
    };
    try {
      const response = await axiosInstance.post(url, data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sendPostRequest}>Send</button>
      </header>
    </div>
  );
}

export default App;
