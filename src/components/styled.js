import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
`;

export const Div = styled.div`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
`;

export const Section = styled.section`
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`;

export const WebsiteBox = styled.div`
border-top: 2px solid black;
border-right: 2px solid black;
border-left: 2px solid black;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
position: relative;
width: 100%;
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