import React from "react";
import styled, { css } from "styled-components";

export const WonP = styled.p`
    ${props => !props.shouldShow && css`
    opacity: 0;`}
  font-weight: bold;
  .fa-trophy {
    font-size: 20px;
    transform: rotate(10deg);
    color: goldenrod;
  }
`;

export default function Won(props) {
    const { shouldShow } = props;
  return (
    <WonP shouldShow={shouldShow}>
      {" "}
      <i class="fas fa-trophy"></i>You solved it! Great work!
    </WonP>
  );
}
