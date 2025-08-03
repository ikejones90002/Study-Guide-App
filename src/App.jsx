import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import Flashcards from './components/Flashcards';
import StudyGuide from './components/StudyGuide';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <header className="banner">Pharm Tech Study Center</header>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Study Guide</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/flashcards">Flashcards</Link>
        </div>
        <div className="toggle-container">
          <button
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Dark Mode' : 'Light Mode'}
          >
            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<StudyGuide />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/flashcards" element={<Flashcards soundEnabled={true} />} />
      </Routes>

      <footer className="footer">
        &copy; 103 Software Solutions LLC
      </footer>
    </div>
  );
}