import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin: 5px 0 5px 15px;
  display : flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  width: calc(100% - 20px);
  align-self: flex-start;
`;


const StyledSeparator = styled.div`
  font-size: .8rem;
  margin-right: 2vw;
`;

const StyledLink = styled.a`
  font-size: 0.7rem;
`;


export default (props) => {
  
  return (
    <React.Fragment>
      <Container>
        <StyledSeparator>></StyledSeparator>
        <StyledLink href='#'>Quartz Rocks</StyledLink>
      </Container>
    </React.Fragment>
  )
}