import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  //text-align: left;
  padding: 0.5vh 6vw;
  display : flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid lightgray;
  min-width: 100%;
  align-self: flex-start;
`;


const StyledSeparator = styled.div`
  font-size: .7rem;
  margin-right: 2vw;
`;

const StyledLink = styled.a`
  font-size: 0.7rem;
`;


export default (props) => {
  
  return (
    <React.Fragment>
      <Container>
        <StyledSeparator>>></StyledSeparator>
        <StyledLink href='#'>Quartz Rocks</StyledLink>
      </Container>
    </React.Fragment>
  )
}