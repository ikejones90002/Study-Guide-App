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

  // New: Dynamic year for copyright
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    // Apply dark mode to footer
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.classList.toggle('dark', darkMode);
    }
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
        <div className="dev-attribution">
          <p>Developed by 103 Software Solution LLC</p>
          <p>&copy; {currentYear} 103 Software Solution LLC. All rights reserved.</p>
        </div>
        <nav className="footer-links">
          <a href="https://103-software-solutions-llc.vercel.app/privacy.html">Privacy Policy</a>
          <a href="https://103-software-solutions-llc.vercel.app/">Terms of Service</a>
          <a href="https://103-software-solutions-llc.vercel.app/contact.html">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
