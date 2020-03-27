import React, { useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";

import bookshelf from "./assets/bookshelf.png";
import book from "./assets/book.png";

import QuestionTextarea from "./QuestionTextarea";
import { WebsiteBox } from "./styled";

const H3 = styled.h3`
  margin: 40px 0 0 0;
`;

const BaseDiv = styled.div`
.box {
    display: flex;
    width: 100%;
}
  .holdImage {
    width: 15%;
  }
  img {
    max-width: 100%;
    display: block;
  }
  p {
    font-size: 40px;
    margin: 0;
  }
`;

const StyledDiv = styled(BaseDiv)`
.box {
    ${props => props.styles}
}
`;

const StyledAnswerDiv = styled(BaseDiv)`
.box {
    justify-content: flex-start;
    align-items: center;
}
`;

export default function BaselineQuestion(props) {
  const [input, setInput] = useState("");
  const answers = ["align-items:", "center"];
  const checkEnabled = () => {
    const included = answers.filter(answer => {
      return input.includes(answer);
    });
    console.log(included);
    return included.length === answers.length;
  };
  return (
    <div className="wrapper">
      <section className="codeArea">
        <QuestionTextarea
          onChange={e => setInput(e.target.value)}
          disabled={checkEnabled()}
          nextQuestion={props.nextQuestion}
        />
        <div>
          <Highlight language="html">
            {`
            <section>
                <div>
                    <img src={book} />
                </div>
                <p>Books! Books! Books!</p>
            </section>
            `}
          </Highlight>
        </div>
      </section>
      <section className="playingArea">
      <StyledDiv className="inputArea" styles={input}>
      <H3>Make this design:</H3>

          <WebsiteBox className="box">
            <div className="holdImage">
              <img src={book} />
            </div>
            <p>Books! Books! Books!</p>
          </WebsiteBox>
        </StyledDiv>
      <H3>Look like this design:</H3>
        <StyledAnswerDiv className="answer">
          <WebsiteBox className="box">
            <div className="holdImage">
              <img src={book} />
            </div>
            <p>Books! Books! Books!</p>
          </WebsiteBox>
        </StyledAnswerDiv>

      </section>
    </div>
  );
}
