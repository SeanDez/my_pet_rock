import React from "react";
import styled from "styled-components";
import FooterBenefitsCard from "./FooterBenefitsCard";

const OuterContainer = styled.div`
  //margin: 5vh 0;
  display: flex;
  flex-flow : row wrap;
  justify-content: space-around;
`;


export default props => {
  return (
    <React.Fragment>
      <OuterContainer>
        <FooterBenefitsCard />
      </OuterContainer>
    </React.Fragment>
  )
}