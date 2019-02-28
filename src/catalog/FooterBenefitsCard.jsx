import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  //margin: 5vh 0;
  display: flex;
  flex-flow : column nowrap;
  justify-content: space-around;
`;





const paragraphStyle = {
  color : '#222',
  fontSize : '0.80rem',
  maxWidth : '360px',
  margin : '1vh 20vw 3vh 20vw'
};

// put them all in containers. Then the underlying component doesn't have to be touched





export default props => {
  return (
    <div>
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
    </div>
  );
}