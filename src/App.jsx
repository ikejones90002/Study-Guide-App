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
       <div class="dev-attribution">
        <p style="margin: 0 0 0.25rem 0;">Developed by 103 Software Solution LLC</p>
        <p style="margin: 0; font-size: 0.7rem;">
          &copy; 2025 103 Software Solution LLC. All rights reserved.
        </p>
      </div>
      <nav class="footer-links">
        <a href="https://103-software-solutions-llc.vercel.app/privacy.html">Privacy Policy</a>
        <a href="https://103-software-solutions-llc.vercel.app/">Terms of Service</a>
        <a href="https://103-software-solutions-llc.vercel.app/contact.html">Contact</a>
      </nav>
    </div>
  </footer>
<script>
    const bookBtn = document.querySelector('.book-btn');

    bookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'mailto:vansportationllc@gmail.com?subject=Booking%20Request&body=Hi%20Vansportation%20LLC,%0D%0AI%20would%20like%20to%20book%20a%20delivery%20job.';
    });

    // Dynamic year update for both copyrights (optional, runs on load)
    document.addEventListener('DOMContentLoaded', () => {
      const year = new Date().getFullYear();
      document.querySelector('.client-copyright').innerHTML = `&copy; ${year} Vansportation LLC. All Rights Reserved.`;
      document.querySelector('.dev-attribution p:last-child').innerHTML = `&copy; ${year} 103 Software Solution LLC. All rights reserved.`;
    });
  </script>
</footer>
    </div>
  );
}
