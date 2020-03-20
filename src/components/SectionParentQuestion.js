import React, { useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";

import Question from "./Question";

const BaseDiv = styled.div`
  section {
    background: cadetblue;
    padding: 20px;
  }
  div {
    margin: 10px;
    padding: 10px;
    border: 1px solid purple;
  }
`;

const StyledDiv = styled(BaseDiv)`
  ${props => `${props.element} {
  display: flex;
}`}
`;

const StyledAnswerDiv = styled(BaseDiv)`
  section {
    display: flex;
  }
`;

export default function SectionParentQuestion(props) {
  const [input, setInput] = useState("");
  const answer = "section";
  return (
    <div className="wrapper">
      <section className="codeArea">
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
            <section>
                <div class="half-content">
                    <h2>A Section Heading!</h2>
                    <p>Lorem ipsum dolor sit...</p>
                </div>
                <div class="half-content">
                    <h2>Another Section Heading!</h2>
                    <p>Lorem ipsum dolor sit...</p>
                </div>
            </section>
            `}
          </Highlight>
        </div>
      </section>
      <section className="playingArea">
        <StyledAnswerDiv className="answer">
          <section>
            <div>
              <h2>A Section Heading!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
            </div>
            <div>
              <h2>Another Section Heading!</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </section>
        </StyledAnswerDiv>
        <StyledDiv className="inputArea" element={input}>
          <section>
            <div>
              <h2>A Section Heading!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
            </div>
            <div>
              <h2>Another Section Heading!</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </section>
        </StyledDiv>
      </section>
    </div>
  );
}
