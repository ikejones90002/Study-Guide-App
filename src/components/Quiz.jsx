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
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [userAnswers, setUserAnswers] = useState([]); // Track user answers
  const [showReview, setShowReview] = useState(false); // Show review section

  const totalQuestions = 92;
  const passingScore = Math.ceil(totalQuestions * 0.75);

  const questions = [
    ...medications,
    ...federalRequirements,
    ...patientSafety,
    ...orderEntry
  ];

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

  useEffect(() => {
    if (showScore || showReview) {
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
  }, [showScore, showReview]);

  useEffect(() => {
    if (showScore && score >= passingScore) {
      confetti();
      if (soundEnabled) {
        // Optional: play success sound
      }
    }
  }, [showScore, score, passingScore]);

  const handleAnswerOptionClick = (isCorrect, selectedOption) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Save user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = {
      selectedOption,
      isCorrect
    };
    setUserAnswers(newUserAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
    setShowReview(false);
    setTimeLeft(3600);
    
    // Reshuffle questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const questionsWithOptions = shuffled.map((question) => {
      const options = question.options.map((option) => ({
        answerText: option,
        isCorrect: option === question.answer,
      }));
      return { ...question, options };
    });
    setShuffledQuestions(questionsWithOptions);
  };

  // Get missed questions with user's answers
  const getMissedQuestions = () => {
    return shuffledQuestions
      .map((question, index) => {
        const userAnswer = userAnswers[index];
        return {
          ...question,
          userAnswer: userAnswer ? userAnswer.selectedOption : null,
          isCorrect: userAnswer ? userAnswer.isCorrect : false
        };
      })
      .filter(question => !question.isCorrect);
  };

  if (showReview) {
    const missedQuestions = getMissedQuestions();
    
    return (
      <div className="quiz-container">
        <div className="review-section">
          <h2>Review Your Results</h2>
          <div className="review-summary">
            <p>You scored <strong>{score}</strong> out of <strong>{shuffledQuestions.length}</strong></p>
            <p>{score >= passingScore ? 'Congratulations, you passed!' : 'Keep studying! You can do it!'}</p>
            <p>You missed <strong>{missedQuestions.length}</strong> questions</p>
          </div>
          
          <div className="missed-questions">
            <h3>Missed Questions</h3>
            {missedQuestions.length === 0 ? (
              <p className="no-missed">Great job! You didn't miss any questions.</p>
            ) : (
              missedQuestions.map((question, index) => (
                <div key={index} className="missed-question-card">
                  <div className="question-text">
                    <strong>Question {index + 1}:</strong> {question.question}
                  </div>
                  
                  <div className="user-answer">
                    <p><strong>Your Answer:</strong> {question.userAnswer}</p>
                    <p className="incorrect">Incorrect</p>
                  </div>
                  
                  <div className="correct-answer">
                    <p><strong>Correct Answer:</strong> {question.answer}</p>
                    {question.explanation && (
                      <p className="explanation"><strong>Explanation:</strong> {question.explanation}</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="review-actions">
            <button onClick={() => setShowReview(false)} className="btn-secondary">
              Back to Results
            </button>
            <button onClick={handleRestartQuiz} className="btn-primary">
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <div className="score-display">
            <p>You scored <strong>{score}</strong> out of <strong>{shuffledQuestions.length}</strong></p>
            <p className="passing-status">
              {score >= passingScore ? 'Congratulations, you passed!' : 'Keep studying! You can do it!'}
            </p>
          </div>
          
          <div className="score-actions">
            <button onClick={() => setShowReview(true)} className="btn-primary">
              Review Answers
            </button>
            <button onClick={handleRestartQuiz} className="btn-secondary">
              Restart Quiz
            </button>
          </div>
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
                onClick={() => handleAnswerOptionClick(option.isCorrect, option.answerText)}
                className={userAnswers[currentQuestion] && userAnswers[currentQuestion].selectedOption === option.answerText 
                  ? (option.isCorrect ? 'correct' : 'incorrect') 
                  : ''}
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
