import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import NextQuestion from "./NextQuestion";
import Question from "./Question";

function App() {
  let currentQuestion = 0;
  let totalQuestions = data.length;

  return (
    <div className="app">
      <h1>Trivia!</h1>
      <h2>
        Question {currentQuestion} of {totalQuestions}
      </h2>
      <Question
        text={data[currentQuestion].question.text}
        choices={data[currentQuestion].question.choices}
      />
      <NextQuestion />
    </div>
  );
}

export default App;
