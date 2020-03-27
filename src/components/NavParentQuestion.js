import React, { useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";

import Question from './Question';

const BaseDiv = styled.div`
  width: 50%;
  nav {
    background: cadetblue;
  }
  ul {
    list-style: none;
    justify-content: space-evenly;
    padding: 0;
  }
  li {
    padding: 20px;
  }
  a {
    color: white;
    font-weight: bold;
    &:hover {
      color: grey;
      transition: 0.3s ease-out;
    }
  }
`;

const StyledDiv = styled(BaseDiv)`
  ${props => `${props.element} {
  display: flex;
}`}
`;

const StyledAnswerDiv = styled(BaseDiv)`
  ul {
    display: flex;
  }
`;

export default function NavParentQuestion(props) {
  const [input, setInput] = useState("");
  const answer = "ul";
  return (
    <div className="wrapper">
      <section className="codeArea">
          <Question 
          questionText="For the following HTML, to what element would you add display: flex?"
          hasWon={input.toLowerCase() === answer}
          input={input}
          handleChange={(e) => setInput(e.target.value)}
          nextQuestion={props.nextQuestion}
          />
        <div>
          <Highlight language="html">
            {`
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </nav>
            `}
          </Highlight>
        </div>
      </section>
      <section className="playingArea">
        <StyledAnswerDiv className="answer">
          <nav>
            <ul>
              <li>
              {/*eslint-disable-next-line*/}
                <a href="#" disabled>
                  Home
                </a>
              </li>
              <li>
                 {/*eslint-disable-next-line*/}
                <a href="#" disabled>
                  About
                </a>
              </li>
              <li>
                 {/*eslint-disable-next-line*/}
                <a href="#" disabled>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </StyledAnswerDiv>
        <StyledDiv className="inputArea" element={input}>
          <nav>
            <ul>
              <li>
                 {/*eslint-disable-next-line*/}
                <a href="#">Home</a>
              </li>
              <li>
                 {/*eslint-disable-next-line*/}
                <a href="#">About</a>
              </li>
              <li>
                 {/*eslint-disable-next-line*/}
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </StyledDiv>
      </section>
    </div>
  );
}
