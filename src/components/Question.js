import React from "react";
import styled from "styled-components";

import Won from "./Won";

const StyledInput = styled.input`
  background: black;
  color: green;
  font-family: monospace;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
`;

export default function Question(props) {
  const { questionText, hasWon, handleChange, input, nextQuestion } = props;
  return (
    <>
      <p>{questionText}</p>
      <Won shouldShow={hasWon} />
      <StyledInput value={input} onChange={handleChange} />
      <button onClick={nextQuestion} type="button" disabled={!hasWon}>
          Next question!
        </button>
    </>
  );
}
