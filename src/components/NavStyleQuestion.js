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
  ul {
  display: flex;
  ${props => props.styles}
    }
`;

const StyledAnswerDiv = styled(BaseDiv)`
  ul {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default function NavStyleQuestion(props) {
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
          <textarea value={input} onChange={(e) => setInput(e.target.value)}>
          </textarea>
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
                <a href="#" disabled>
                  Home
                </a>
              </li>
              <li>
                <a href="#" disabled>
                  About
                </a>
              </li>
              <li>
                <a href="#" disabled>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </StyledAnswerDiv>
        <StyledDiv className="inputArea" styles={input}>
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
        </StyledDiv>
      </section>
    </div>
  );
}
