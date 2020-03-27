import React from "react";
import styled from "styled-components";

import { Div } from "./styled";

const P = styled.p`
  background: black;
  color: green;
  font-family: monospace;
  font-size: 16px;
  width: 80%;
  margin: 0;
  padding: 10px 10px 0 20px;
`;

const ParentP = styled.p`
  background: black;
  font-family: monospace;
  font-size: 16px;
  margin: 0;
  color: #e8bf6a;
  width: 80%;
  padding: 10px 10px 0 10px;
`;
const ParentPBotPad = styled(ParentP)`
  padding: 10px 10px 10px 10px;
`;

const Textarea = styled.textarea`
  display: block;
  background: black;
  color: green;
  font-family: monospace;
  font-size: 16px;
  width: 80%;
  outline: none;
  border: none;
  padding: 10px 10px 10px 20px;
  margin: 0;
`;

export default function QuestionTextarea({
  disabled,
  nextQuestion,
  onChange,
  parentContainer
}) {
  console.log(disabled, "disabled");
  return (
    <>
          <Div>
      {parentContainer && <ParentP>{`${parentContainer} {`}</ParentP>}

        <P>display: flex;</P>
        <Textarea onChange={onChange} placeholder="/* Your CSS here */" />
        <ParentPBotPad>{parentContainer && `}`}</ParentPBotPad>
        <div>
          <button disabled={!disabled} onClick={nextQuestion}>
            Next question!
          </button>
        </div>
      </Div>
    </>
  );
}
