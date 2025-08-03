import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Quiz({ soundEnabled }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const passingScore = 34; // 75% of 45 questions

  const questions = [
    {
      question: "What is the primary function of active ingredients in a medication?",
      options: ["Enhance flavor", "Produce therapeutic effects", "Increase shelf life", "Add color"],
      answer: "Produce therapeutic effects"
    },
    {
      question: "Which term describes the movement of drugs through the body (absorption, distribution, metabolism, excretion)?",
      options: ["Pharmacotherapeutics", "Pharmacokinetics", "Pharmacology", "Toxicology"],
      answer: "Pharmacokinetics"
    },
    {
      question: "What is the generic name and class of Zestril or Prinivil?",
      options: ["Lisinopril, ACE inhibitor", "Metformin, Biguanide", "Atorvastatin, Statin", "Omeprazole, PPI"],
      answer: "Lisinopril, ACE inhibitor"
    },
    {
      question: "What is the primary use of Levothyroxine (Synthroid)?",
      options: ["Hypertension", "Hypothyroidism", "Diabetes", "Pain relief"],
      answer: "Hypothyroidism"
    },
    {
      question: "Hydrocodone/APAP (Vicodin) belongs to which drug class?",
      options: ["Antidepressant", "Opioid analgesic", "Antibiotic", "Antihistamine"],
      answer: "Opioid analgesic"
    },
    {
      question: "What is the generic name and use of Lipitor?",
      options: ["Atorvastatin, cholesterol management", "Amlodipine, hypertension", "Esomeprazole, GERD", "Albuterol, asthma"],
      answer: "Atorvastatin, cholesterol management"
    },
    {
      question: "What is the use of Metformin (Glucophage)?",
      options: ["Type 2 diabetes", "Hypertension", "Asthma", "Pain relief"],
      answer: "Type 2 diabetes"
    },
    {
      question: "What class does Albuterol (ProAir, Ventolin) belong to?",
      options: ["Beta-2 agonist", "Statin", "PPI", "Anticoagulant"],
      answer: "Beta-2 agonist"
    },
    {
      question: "What is the primary use of Omeprazole (Prilosec)?",
      options: ["GERD", "Hypertension", "Diabetes", "Infection"],
      answer: "GERD"
    },
    {
      question: "What is the generic name of Norvasc?",
      options: ["Amlodipine", "Lisinopril", "Atorvastatin", "Metoprolol"],
      answer: "Amlodipine"
    },
    {
      question: "Which measurement system uses grains and minims?",
      options: ["Metric", "Apothecary", "Household", "International"],
      answer: "Apothecary"
    },
    {
      question: "What unit measures electrolyte concentration in pharmacy?",
      options: ["Milligram", "Milliequivalent (mEq)", "International unit", "Specific gravity"],
      answer: "Milliequivalent (mEq)"
    },
    {
      question: "What does specific gravity measure in pharmacy?",
      options: ["Drug potency", "Density ratio to water", "Dose volume", "Temperature"],
      answer: "Density ratio to water"
    },
    {
      question: "How is Body Surface Area (BSA) used in pharmacy?",
      options: ["Inventory tracking", "Dose calculation", "Prescription validation", "Temperature conversion"],
      answer: "Dose calculation"
    },
    {
      question: "What is Clark’s Rule used for?",
      options: ["Adult dosing", "Pediatric dosing", "IV flow rate", "Mixture strength"],
      answer: "Pediatric dosing"
    },
    {
      question: "What formula calculates a pediatric dose using Clark’s Rule?",
      options: ["(Weight in lbs ÷ 150) × adult dose", "(Age ÷ (Age + 12)) × adult dose", "Height × weight", "Age in months × adult dose"],
      answer: "(Weight in lbs ÷ 150) × adult dose"
    },
    {
      question: "What does alligation calculate?",
      options: ["IV infusion rate", "Mixture strengths", "Body surface area", "Insurance reimbursement"],
      answer: "Mixture strengths"
    },
    {
      question: "What is dimensional analysis used for in pharmacy?",
      options: ["Converting units and calculating doses", "Inventory management", "Billing adjudication", "Compounding ointments"],
      answer: "Converting units and calculating doses"
    },
    {
      question: "How many milliliters are in 1 teaspoon (household system)?",
      options: ["2 mL", "5 mL", "10 mL", "15 mL"],
      answer: "5 mL"
    },
    {
      question: "What is the prescription component that provides patient instructions?",
      options: ["Superscription", "Inscription", "Signa", "Subscription"],
      answer: "Signa"
    },
    {
      question: "What does the National Drug Code (NDC) identify?",
      options: ["Drug potency", "Manufacturer, product, package size", "Dosage strength", "Patient instructions"],
      answer: "Manufacturer, product, package size"
    },
    {
      question: "Which schedule includes medications with the highest abuse potential?",
      options: ["CII", "CIII", "CIV", "CV"],
      answer: "CII"
    },
    {
      question: "What is an auxiliary label?",
      options: ["Drug expiration date", "Supplementary instructions", "Manufacturer code", "Dosage strength"],
      answer: "Supplementary instructions"
    },
    {
      question: "What is the Average Wholesale Price (AWP) used for?",
      options: ["Patient counseling", "Insurance reimbursement", "Dose calculation", "Compounding"],
      answer: "Insurance reimbursement"
    },
    {
      question: "What is a capitation fee?",
      options: ["Daily sales report", "Fixed monthly payment per patient", "Prescription markup", "Depreciation cost"],
      answer: "Fixed monthly payment per patient"
    },
    {
      question: "What is adjudication in pharmacy?",
      options: ["Inventory tracking", "Insurer validation of prescription", "Dose calculation", "Compounding process"],
      answer: "Insurer validation of prescription"
    },
    {
      question: "What does depreciation represent in pharmacy business math?",
      options: ["Asset value decrease", "Daily cash flow", "Insurance reimbursement", "Inventory turnover"],
      answer: "Asset value decrease"
    },
    {
      question: "What is included in a daily cash/sales report?",
      options: ["Patient records", "Sales, discounts, cash, and refunds", "Prescription ingredients", "Drug interactions"],
      answer: "Sales, discounts, cash, and refunds"
    },
    {
      question: "What is compounding in pharmacy?",
      options: ["Dispensing pre-made drugs", "Preparing customized medications", "Billing insurance", "Inventory tracking"],
      answer: "Preparing customized medications"
    },
    {
      question: "What is a diluent in compounding?",
      options: ["Active ingredient", "Liquid to dilute powders", "IV additive", "Prescription label"],
      answer: "Liquid to dilute powders"
    },
    {
      question: "What is the Beyond Use Date (BUD)?",
      options: ["Manufacturing date", "Expiry date for compounded medications", "Prescription fill date", "Insurance approval date"],
      answer: "Expiry date for compounded medications"
    },
    {
      question: "What are additives in IV solutions?",
      options: ["Medications or nutrients", "Packaging materials", "Auxiliary labels", "Inventory records"],
      answer: "Medications or nutrients"
    },
    {
      question: "What was a common ancient treatment to release evil spirits?",
      options: ["Bloodletting", "Trephining", "Laudanum", "Vaccination"],
      answer: "Trephining"
    },
    {
      question: "Who is considered the father of medicine?",
      options: ["Aristotle", "Galen", "Hippocrates", "Paracelsus"],
      answer: "Hippocrates"
    },
    {
      question: "What was laudanum used for in the 18th–19th centuries?",
      options: ["Antibacterial treatment", "Pain relief and sedation", "Vaccine development", "Blood clotting"],
      answer: "Pain relief and sedation"
    },
    {
      question: "Who discovered penicillin in 1928?",
      options: ["Louis Pasteur", "Alexander Fleming", "Gerhard Domagk", "Jonas Salk"],
      answer: "Alexander Fleming"
    },
    {
      question: "What is the correct symbol of the medical profession?",
      options: ["Caduceus", "Staff of Asclepius", "Double helix", "Leech"],
      answer: "Staff of Asclepius"
    },
    {
      question: "What major change in pharmacy occurred over the past 100 years?",
      options: ["Elimination of pharmacies", "Shift from compounding to dispensing", "Ban on technicians", "Use of leeches"],
      answer: "Shift from compounding to dispensing"
    },
    {
      question: "What is the difference between opiates and opioids?",
      options: ["Opiates are synthetic; opioids are natural", "Opiates are natural; opioids include synthetic", "Both are identical", "Opiates are for infections"],
      answer: "Opiates are natural; opioids include synthetic"
    },
    {
      question: "What did Florence Nightingale contribute to medicine?",
      options: ["Discovered penicillin", "Improved hospital sanitation", "Developed vaccines", "Invented the stethoscope"],
      answer: "Improved hospital sanitation"
    },
    {
      question: "What was the role of early pharmacists in the U.S.?",
      options: ["Only dispensed vaccines", "Doctors preparing remedies", "Managed insurance billing", "Performed surgeries"],
      answer: "Doctors preparing remedies"
    },
    {
      question: "What does the Pharmacy Technician Certification Board (PTCB) do?",
      options: ["Manufactures drugs", "Issues certification exams", "Regulates hospitals", "Develops vaccines"],
      answer: "Issues certification exams"
    },
    {
      question: "What ancient belief attributed illness to an imbalance of four humors?",
      options: ["Hippocratic theory", "Shamanism", "Genetic theory", "Microbe theory"],
      answer: "Hippocratic theory"
    },
    {
      question: "What is the generic name of Xanax?",
      options: ["Alprazolam", "Lorazepam", "Diazepam", "Clonazepam"],
      answer: "Alprazolam"
    },
    {
      question: "What is the primary use of Warfarin (Coumadin)?",
      options: ["Anticoagulation", "Pain relief", "Antibiotic", "Antidepressant"],
      answer: "Anticoagulation"
    }
  ];

  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          setShowScore(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = shuffledQuestions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      if (soundEnabled) new Audio('/sounds/correct.mp3').play();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      if (soundEnabled) new Audio('/sounds/incorrect.mp3').play();
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(3600); // Reset timer to 60 minutes
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  return (
    <div className="quiz-card">
      <h1>PTCE Practice Test</h1>
      <p>Complete 45 questions in 60 minutes. Passing score: 75% (34/45).</p>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
      {showScore ? (
        <div>
          <h2>Your Score: {score} out of {shuffledQuestions.length}</h2>
          <p>{score >= passingScore ? "Congratulations! You passed the practice PTCE." : "You did not meet the 75% passing score. Try again!"}</p>
          <button className="quiz-button" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1} of {shuffledQuestions.length}</h2>
          <p>{shuffledQuestions[currentQuestion]?.question}</p>
          <div>
            {shuffledQuestions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                className="option"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}