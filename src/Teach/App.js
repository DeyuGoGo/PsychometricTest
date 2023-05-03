import React, { useContext } from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import UserList from "./UserList";
import Counter from "./Counter";
import FunctionalCounter from "./FunctionalCounter";
import ThemeProvider from "./ThemeProvider";
import ThemeContext from "./ThemeContext";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginForm from './pages/LoginForm';
import Post from './pages/Post';

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ];

  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/post/:id" element={<Post />} />

        </Routes>
    </div>
  </Router>
  );
}

function WrappedApp() {
    return (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
  }
  
  export default WrappedApp;