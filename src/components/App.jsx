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
        correct_choice_index={
          data[currentQuestion].question.choices[
            data[currentQuestion].question.correct_choice_index
          ]
        }
      />
      <NextQuestion />
    </div>
  );
}

export default App;
