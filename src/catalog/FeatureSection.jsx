import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  margin: 1vh 0;
`;

export default props => {
  
  return (
    <React.Fragment>
      <h2 style={{ fontWeight : 400 }}>Features</h2>
      <ul>
        <StyledLi>Metal outer covering and neckpiece</StyledLi>
        <StyledLi>Quick pop-out withdrawal mechanism for emergency threats</StyledLi>
        <StyledLi>Optional Premium package encludes golden accents</StyledLi>
      </ul>
    </React.Fragment>
  )
}