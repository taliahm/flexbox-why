import React, { useState } from "react";
import styled from "styled-components";
import Highlight from "react-highlight.js";

import QuestionTextarea from "./QuestionTextarea";
import { Div, Flex, WebsiteBox } from "./styled";

const H3 = styled.h3`
  margin: 40px 0 0 0;
`;

const BaseDiv = styled.div`
  .box {
    display: flex;
  }
  article {
    padding: 0 10px;
  }
  .full {
    width: 100%;
  }
  .half {
    width: 50%;
  }
`;

const StyledDiv = styled(BaseDiv)`
  .box {
    ${props => props.styles}
  }
`;

const StyledAnswerDiv = styled(BaseDiv)`
  .box {
    flex-wrap: wrap;
  }
`;

export default function BaselineQuestion(props) {
  const [input, setInput] = useState("");
  const answers = ["flex-wrap", "wrap"];
  const checkEnabled = () => {
    const splitInput = input.split(":");
    if (splitInput.length !== 2) return;
    console.log(splitInput[0], answers[0], splitInput[1]);
    return splitInput[0] === answers[0] && splitInput[1].includes(answers[1]);
  };
  return (
    <div className="wrapper">
      <section className="codeArea">
        <Div>
            <p>What flexbox rule needs to be applied to the section to make the designs below match?</p>
        <Div width="100%">
          <QuestionTextarea
            onChange={e => setInput(e.target.value)}
            disabled={checkEnabled()}
            nextQuestion={props.nextQuestion}
            parentContainer="section"
          />
          </Div>
          {/* <Div width="60%">
            <Highlight language="html">
              {`
            <section>
                <article className="half">
                    <h2>Cupcakes!</h2>
                    <p>Pie pie candy canes biscuit ...</p>
                </article>
                <article className="half">
                    <h2>Treats!</h2>
                    <p>Jelly-o powder pastry ...</p>
                </article>
                <article className="full">
                    <h2>Such good and yummy stuff!</h2>
                    <p>Liquorice carrot cake danish. Muffin gingerbread...</p>
                </article>
            </section>
            `}
            </Highlight>
          </Div> */}
        </Div>
      </section>
      <section className="playingArea">
        <StyledDiv className="inputArea" styles={input}>
          <H3>Make this design:</H3>

          <WebsiteBox className="box">
            <article className="half">
              <h2>Cupcakes!</h2>
              <p>
                Pie pie candy canes biscuit gummi bears. Muffin topping macaroon
                apple pie. Tiramisu oat cake lollipop cake chocolate cake.
                Macaroon jelly-o bonbon jelly cake. Fruitcake dragée apple pie
                sweet roll dragée sesame snaps pie cookie jelly-o.
              </p>
            </article>
            <article className="half">
              <h2>Treats!</h2>
              <p>
                Jelly-o powder pastry bear claw oat cake. Gummies liquorice
                candy canes dessert gingerbread cotton candy. Sesame snaps
                dragée gummies donut donut. Lollipop tart carrot cake
                marshmallow jelly beans pastry. Jelly candy cheesecake tart
                icing.
              </p>
            </article>
            <article className="full">
              <h2>Such good and yummy stuff!</h2>
              <p>
                Liquorice carrot cake danish. Muffin gingerbread liquorice lemon
                drops bonbon. Candy bear claw oat cake fruitcake sweet tart
                jelly. Sweet roll toffee marshmallow jujubes pastry. Danish
                halvah marshmallow fruitcake halvah gummies chupa chups danish
                tiramisu. Biscuit toffee pastry muffin topping danish donut.
                Danish oat cake cake pastry. Gummi bears pudding jelly beans
                croissant chocolate cake gummies ice cream. Danish jujubes bear
                claw sugar plum sugar plum chocolate toffee. Brownie jelly
                marzipan jelly-o croissant carrot cake. Bear claw topping wafer
                dessert tiramisu sugar plum. Jelly beans apple pie cookie
                lollipop apple pie dragée gummi bears. Toffee toffee jelly
                beans.
              </p>
            </article>
          </WebsiteBox>
        </StyledDiv>
        <H3>Look like this design:</H3>
        <StyledAnswerDiv className="answer">
          <WebsiteBox className="box">
            <article className="half">
              <h2>Cupcakes!</h2>
              <p>
                Pie pie candy canes biscuit gummi bears. Muffin topping macaroon
                apple pie. Tiramisu oat cake lollipop cake chocolate cake.
                Macaroon jelly-o bonbon jelly cake. Fruitcake dragée apple pie
                sweet roll dragée sesame snaps pie cookie jelly-o.
              </p>
            </article>
            <article className="half">
              <h2>Treats!</h2>
              <p>
                Jelly-o powder pastry bear claw oat cake. Gummies liquorice
                candy canes dessert gingerbread cotton candy. Sesame snaps
                dragée gummies donut donut. Lollipop tart carrot cake
                marshmallow jelly beans pastry. Jelly candy cheesecake tart
                icing.
              </p>
            </article>
            <article className="full">
              <h2>Such good and yummy stuff!</h2>
              <p>
                Liquorice carrot cake danish. Muffin gingerbread liquorice lemon
                drops bonbon. Candy bear claw oat cake fruitcake sweet tart
                jelly. Sweet roll toffee marshmallow jujubes pastry. Danish
                halvah marshmallow fruitcake halvah gummies chupa chups danish
                tiramisu. Biscuit toffee pastry muffin topping danish donut.
                Danish oat cake cake pastry. Gummi bears pudding jelly beans
                croissant chocolate cake gummies ice cream. Danish jujubes bear
                claw sugar plum sugar plum chocolate toffee. Brownie jelly
                marzipan jelly-o croissant carrot cake. Bear claw topping wafer
                dessert tiramisu sugar plum. Jelly beans apple pie cookie
                lollipop apple pie dragée gummi bears. Toffee toffee jelly
                beans.
              </p>
            </article>
          </WebsiteBox>
        </StyledAnswerDiv>
      </section>
    </div>
  );
}
