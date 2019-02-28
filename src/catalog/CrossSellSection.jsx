import React from "react";
import styled from "styled-components";
import CrossSellCard from "./CrossSellCard";

const OuterContainer = styled.div`
  margin: 5vh 0;
  display: flex;
  flex-flow : row wrap;
  justify-content: space-around;
`;


export default props => {
  return (
    <React.Fragment>
      <OuterContainer>
        <CrossSellCard />
      </OuterContainer>
    </React.Fragment>
  )
}