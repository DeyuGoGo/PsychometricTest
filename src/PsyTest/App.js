import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomeMessage from './Teach/WelcomeMessage';
import UserList from './Teach/UserList';
import axiosInstance from "./axiosConfig";

function App() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
    ];
  async function sendPostRequest() {
    const url = "/v1/chat/completions";
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "請幫我製作一個心理測驗",
        },
      ],
    };
    try {
      const response = await axiosInstance.post(url, data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage name="John" />
        <UserList users={users} />

        <button onClick={sendPostRequest}>Send</button>
      </header>
    </div>
  );
}

export default App;
