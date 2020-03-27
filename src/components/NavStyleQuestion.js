import React, { useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";

import { Div, Flex, Section } from "./styled";
import QuestionTextarea from "./QuestionTextarea";
import Hints from './Hints';

const BaseDiv = styled.div`
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

const WebsiteBox = styled.div`
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-radius: 5px;
  position: relative;
  &:after {
    content: "";
    border-left: 2px solid black;
    height: 25px;
    position: absolute;
    width: 0;
    display: block;
    bottom: -22px;
    left: -2px;
  }
  &:before {
    content: "";
    border-left: 2px solid black;
    height: 25px;
    position: absolute;
    width: 0;
    display: block;
    bottom: -22px;
    right: -2px;
  }
`;

const H3 = styled.h3`
  margin: 40px 0 0 0;
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
  const answers = ['justify-content:', 'space-evenly'];
  const checkEnabled = () => {
    const included = answers.filter((answer) => {
      return input.includes(answer);
    });
    console.log(included);
    return included.length === answers.length;
  }
  return (
    <div>
      <section className="playingArea">
        <div className="wrapper">
          <H3>Make this design:</H3>
          <StyledDiv className="inputArea" styles={input}>
            <WebsiteBox>
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
            </WebsiteBox>
          </StyledDiv>
        </div>
        <div className="wrapper">
          <H3>Look like this design:</H3>
          <StyledAnswerDiv className="answer">
            <WebsiteBox>
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
            </WebsiteBox>
          </StyledAnswerDiv>
        </div>
      </section>
      <Section className="codeArea" margin="40px 0 0 0">
      <Hints hints={["justify-content"]} />
        <Flex align="center">
          <Div width="50%" margin="0 0 0 30px">
            <QuestionTextarea nextQuestion={props.nextQuestion} disabled={checkEnabled(input)} onChange={e => setInput(e.target.value)} />
          </Div>
          <Div width="50%">
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
          </Div>
        </Flex>
      </Section>
    </div>
  );
}
