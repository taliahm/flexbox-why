import React, { useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";

import Question from './Question';

const BaseDiv = styled.div`
border: 1px solid purple;
  section {
      background: cadetblue;
      padding: 20px;
      width: 70%;
  }
  aside {
      padding: 10px;
  }
`;

const StyledDiv = styled(BaseDiv)`
  ${props => `${props.element} {
  display: flex;
}`}
`;

const StyledAnswerDiv = styled(BaseDiv)`
  main {
    display: flex;
  }
`;

export default function MainParentQuestion(props) {
  const [input, setInput] = useState("");
  const answer = "main";
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
            <main>
                <section>
                    <h2>A Section Heading!</h2>
                    <p>Lorem ipsum dolor sit...</p>
                </section>
                <aside>
                    <h3>An Aside!</h3>
                    <ul>
                        <li>sit voluptatem </li>
                        <li>eius modi tempora</li>
                        <li>consectetur, adipisci velit</li>
                    </ul>
                </aside>
            </main>
            `}
          </Highlight>
        </div>
      </section>
      <section className="playingArea">
        <StyledAnswerDiv className="answer">
        <main>
            <section>
                <h2>A Section Heading!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <aside>
                <h3>An Aside!</h3>
                <ul>
                    <li>sit voluptatem </li>
                    <li>eius modi tempora</li>
                    <li>consectetur, adipisci velit</li>
                </ul>
            </aside>
            </main>
        </StyledAnswerDiv>
        <StyledDiv className="inputArea" element={input}>
        <main>
            <section>
                <h2>A Section Heading!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <aside>
                <h3>An Aside!</h3>
                <ul>
                    <li>sit voluptatem </li>
                    <li>eius modi tempora</li>
                    <li>consectetur, adipisci velit</li>
                </ul>
            </aside>
            </main>
        </StyledDiv>
      </section>
    </div>
  );
}
