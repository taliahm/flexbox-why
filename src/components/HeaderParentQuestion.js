import React, { useState } from "react";
import Highlight from "react-highlight.js";
import styled from "styled-components";

import Question from "./Question";

const BaseDiv = styled.div`
  header {
    align-items: center;
    justify-content: center;
    height: 20vh;
    background: purple;
    width: 100%;
  }
  div {
    background: green;
    width: 200px;
    text-align: center;
    padding: 20px;
  }

  h1 {
      margin: 0;
  }
`;

const StyledDiv = styled(BaseDiv)`
  ${props => `${props.element} {
    display: flex;
  }`}
`;

const StyledAnswerDiv = styled(BaseDiv)`
  header {
    display: flex;
  }
`;

export default function HeaderParentQuestion(props) {
  const [input, setInput] = useState("");
  const answer = 'header';
  return (
    <div>
      <Question
        questionText="For the following HTML, to what element would you add display: flex?"
        hasWon={input.toLowerCase() === answer}
        input={input}
        handleChange={e => setInput(e.target.value)}
        nextQuestion={props.nextQuestion}
      />
      <div>
        <Highlight language="html">
          {`
          <header>
            <div>
                <h1>The Most Important Header!</h1>
            </div>
          </header>
        `}
        </Highlight>
      </div>
      <section className="playingArea">
        <StyledAnswerDiv>
          <header>
            <div>
              <h1>The Most Important Header!</h1>
            </div>
          </header>
        </StyledAnswerDiv>
        <StyledDiv element={input}>
          <header>
            <div>
              <h1>The Most Important Header!</h1>
            </div>
          </header>
        </StyledDiv>
      </section>
    </div>
  );
}
