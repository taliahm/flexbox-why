import React, { useState } from "react";
import "./App.css";

import NavParentQuestion from "./components/NavParentQuestion";
import HeaderParentQuestion from "./components/HeaderParentQuestion";
import MainParentQuestion from "./components/MainParentQuestion";
import SectionParentQuestion from "./components/SectionParentQuestion";

import NavStyleQuestion from "./components/NavStyleQuestion";
import BaselineQuestion from "./components/BaselineQuestion";
import FlexWrapQuestion from './components/FlexWrapQuestion';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div>
      <div>
        <h1>Flexbox Design</h1>
        <p>Use your knowledge of flexbox to recreate designs! Each question will require you to add some CSS (either CSS selectors or rules) in order to recreate a design.</p>
      </div>
      {currentQuestion === 6 && (
        <FlexWrapQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 5 && (
        <BaselineQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 4 && (
        <NavStyleQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 2 && (
        <SectionParentQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 1 && (
        <MainParentQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 3 && (
        <NavParentQuestion nextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 0 && (
        <HeaderParentQuestion nextQuestion={handleNextQuestion} />
      )}
    </div>
  );
}

export default App;
