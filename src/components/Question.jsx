import React from "react";
import Answer from "./Answer";

function Question(props) {
  return (
    <div>
      <h2>{props.text}</h2>
      <ul>
        <li>{props.choices[0]}</li>
        <li>{props.choices[1]}</li>
        <li>{props.choices[2]}</li>
        <li>{props.choices[3]}</li>
      </ul>
      <Answer text={props.correct_choice_index} />
    </div>
  );
}

export default Question;
