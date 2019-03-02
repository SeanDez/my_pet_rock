import React from "react";
import styled from "styled-components";
import CrossSellCard from "./CrossSellCard";

const OuterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: ${props => props.marginTop};
  border: ${props => props.border};
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow : row wrap;
  justify-content: space-around;
`;

const Heading = styled.h2`
  font-style: italic;
`;

export default props => {
  return (
    <OuterContainer style={props.catalogStyles}>
      <Heading>Other Items You May Be Interested In</Heading>
      <CardContainer>
        <CrossSellCard />
      </CardContainer>
    </OuterContainer>
  )
}