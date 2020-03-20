import React, { useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";

import Question from "./Question";

const BaseDiv = styled.div`
  p {
    font-size: 20px;
  }
  span {
    font-size: 30px;
  }
  ul {
      list-style: none;
  }
`;

const StyledDiv = styled(BaseDiv)`
  ul {
    display: flex;
    ${props => props.styles}
  }
`;

const StyledAnswerDiv = styled(BaseDiv)`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }
`;

export default function BaselineQuestion(props) {
  const [input, setInput] = useState("");
  const answer = "ul";
  return (
    <div className="wrapper">
      <section className="codeArea">
        {/* <Question 
          questionText="For the following HTML, to what element would you add display: flex?"
          hasWon={input.toLowerCase() === answer}
          input={input}
          handleChange={(e) => setInput(e.target.value)}
          nextQuestion={props.nextQuestion}
          /> */}
        display: flex;
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
        ></textarea>
        <div>
          <Highlight language="html">
            {`
            <div><p>We create <button>the best</button>products</p></div>
            `}
          </Highlight>
        </div>
      </section>
      <section className="playingArea">
        <StyledAnswerDiv className="answer">
        <div>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>
                <span>three</span>
              </li>
            </ul>
          </div>
        </StyledAnswerDiv>
        <StyledDiv className="inputArea" styles={input}>
          <div>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>
                <span>three</span>
              </li>
            </ul>
          </div>
        </StyledDiv>
      </section>
    </div>
  );
}
