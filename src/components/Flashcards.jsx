import { useState } from 'react';
import flashcards from '../assets/flashcards.json';

export default function Flashcards({ soundEnabled }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const audio = new Audio('/sounds/flip.mp3');

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
    if (soundEnabled) audio.play();
  };

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="flashcard-section">
      <div className={`flashcard${flipped ? ' flipped' : ''}`} onClick={handleFlip}>
        <div className="front">{flashcards[index].front}</div>
        <div className="back">{flashcards[index].back}</div>
      </div>
      <button className="flashcard-button" onClick={handleNext}>Next Flashcard</button>
    </div>
  );
}