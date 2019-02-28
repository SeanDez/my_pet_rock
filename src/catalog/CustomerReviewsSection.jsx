import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  border : 1px solid #999;
  border-radius: 3%;
  padding: 1vh 1vw;
  width: 560px;
  max-width: 700px;
`;

export default props => {
  
  return (
    <div>
      <OuterContainer>
        <h3>Customer Reviews</h3>
        <p>There aren't any yet. <a href='#'>Write the first!</a></p>
      </OuterContainer>
    </div>
  );
}