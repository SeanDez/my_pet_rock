import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  //margin: 5vh 0;
  display: flex;
  flex-flow : column nowrap;
  justify-content: space-around;
  align-items: center;
  border : 2px dashed deeppink;
  max-width: 300px;
`;





const paragraphStyle = {
  color : '#222',
  fontSize : '0.80rem',
  maxWidth : '360px',
  // border : '2px dashed gray'
};

// put them all in containers. Then the underlying component doesn't have to be touched





export default props => {
  return (
    <React.Fragment>
      {
        props.cardData.map((dataObject, index) => (
          <OuterContainer key={index}>
            { dataObject.icon }
            <p style={ paragraphStyle } key={index}>
              { dataObject.text }
            </p>
          </OuterContainer>
        ))
      }
    </React.Fragment>
  );
}