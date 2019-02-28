import React from "react";
import styled from "styled-components";


const OuterContainer = styled.div`
  border-top: 2px solid lightgrey;
  border-bottom: 2px solid lightgray;
  display: flex;
`;

const Emphasized = styled.span`
  font-weight: 600;
`;

export default props => {
  return (
    <React.Fragment>
      <OuterContainer>
        <p><Emphasized>Free shipping</Emphasized> throughout the contiguous US (Note: Outside the US will incur additional fees)</p>
      </OuterContainer>
    </React.Fragment>
  )
}