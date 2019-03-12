import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 0 3vw 1vh 0;
  max-width: 700px;
`;

export default props => {
  
  return (
    <React.Fragment>
      <h2 style={{ fontWeight : 400 }}>Description</h2>
      
      { // long description paragraphs
        props.data.map((paragraph, index) => (
          <StyledParagraph key={index}>
            {paragraph}
          </StyledParagraph>
        ))
      }
    </React.Fragment>
  );
}