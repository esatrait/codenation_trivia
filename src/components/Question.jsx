import React from "react";

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
    </div>
  );
}

export default Question;
