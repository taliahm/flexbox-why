import styled from 'styled-components';


export const Flex = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
`;