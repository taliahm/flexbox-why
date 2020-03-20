import React, { useState } from "react";
import "./App.css";

import NavParentQuestion from "./components/NavParentQuestion";
import HeaderParentQuestion from "./components/HeaderParentQuestion";
import MainParentQuestion from "./components/MainParentQuestion";
import SectionParentQuestion from "./components/SectionParentQuestion";

import NavStyleQuestion from "./components/NavStyleQuestion";
import BaselineQuestion from "./components/BaselineQuestion";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div>
      {currentQuestion === 0 && (
        <BaselineQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 5 && (
        <NavStyleQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 4 && (
        <SectionParentQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 3 && (
        <MainParentQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 1 && (
        <NavParentQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 2 && (
        <HeaderParentQuestion nextQuestion={handleNextQuestion} />
      )}
    </div>
  );
}

export default App;
