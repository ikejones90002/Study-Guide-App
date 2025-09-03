import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './Quiz.css';

// Import domain modules
import { medications } from './questions/medications.js';
import { federalRequirements } from './questions/federalRequirements.js';
import { patientSafety } from './questions/patientSafety.js';
import { orderEntry } from './questions/orderEntry.js';

export default function Quiz({ soundEnabled }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // State to hold shuffled questions
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds

  // Dynamically calculate passing score for 92 questions
  const totalQuestions = 92;
  const passingScore = Math.ceil(totalQuestions * 0.75); // 69

  // Merge all domain questions into one array
  const questions = [
    ...medications,
    ...federalRequirements,
    ...patientSafety,
    ...orderEntry
  ];

  // Shuffle questions and add isCorrect property to options
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const questionsWithOptions = shuffled.map((question) => {
      const options = question.options.map((option) => ({
        answerText: option,
        isCorrect: option === question.answer,
      }));
      return { ...question, options };
    });
    setShuffledQuestions(questionsWithOptions);
  }, []);

  // Timer logic
  useEffect(() => {
    if (showScore) {
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          setShowScore(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [showScore]);

  // Trigger confetti on passing score
  useEffect(() => {
    if (showScore && score >= passingScore) {
      confetti();
      if (soundEnabled) {
        // Optional: play success sound
      }
    }
  }, [showScore, score, passingScore]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {shuffledQuestions.length}
          {score >= passingScore ? (
            <p>Congratulations, you passed!</p>
          ) : (
            <p>Keep studying! You can do it!</p>
          )}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{shuffledQuestions.length}
            </div>
            <div className="timer">Time Left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</div>
            <div className="question-text">{shuffledQuestions[currentQuestion]?.question}</div>
          </div>
          <div className="answer-section">
            {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
