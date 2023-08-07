import React, { useState } from "react";
import QuizData from "./QuizData";

// Helper function to get the percentage score
const getPercentageScore = (score, totalQuestions) => {
  return Math.round((score / totalQuestions) * 100);
};

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === QuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const percentageScore = getPercentageScore(score, QuizData.length);
  const isHappy = percentageScore >= 50;

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>
            You Scored: {score} out of {QuizData.length}
          </h2>
          {isHappy ? (
            <span role="img" aria-label="Happy Emoji">
              😄
            </span>
          ) : (
            <span role="img" aria-label="Sad Emoji">
              😢
            </span>
          )}
          <h2>Percentage Score: {percentageScore}%</h2>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{QuizData[currentQuestion].question}</h3>
          <div className="options">
            {QuizData[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
