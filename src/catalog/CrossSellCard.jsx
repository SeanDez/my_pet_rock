import React from "react";
import styled from "styled-components";


const mainImage = require('../images/placeholder-200x200.jpg');
const todayPrice = 39.99;
const scratchedOutPrice = 100;

const OuterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1vh 1vw;
    &:hover {
    border: 1px solid gray;
  }
`;

const PriceText = styled.span`
  font-size : 1.1rem
`;

const ScratchedOutPriceText = styled(PriceText)`
  margin-left: 4vw;
  text-decoration: line-through;
  font-style: italic;
`;


const ProductName = styled.h4`
  font-weight: 300;
`;

export default props => {
  return (
    <React.Fragment>
      { // replace with a real array of cross sells
        [null, null].map(nothing => (
          <OuterContainer>
            <img src={mainImage} style={{
              minWidth : '10vw',
              minHeight : 'auto',
              border : '2px solid blue',
              objectFit : 'contain'
            }}
            />
            <ProductName>Cross Sell Product Name</ProductName>
            <div style={{   marginTop: "-2vh", marginBottom : '2vh'
            }}>
              <PriceText>$39.99</PriceText>
              <ScratchedOutPriceText>$100</ScratchedOutPriceText>
            </div>
          </OuterContainer>
        ))
      }
    </React.Fragment>
  )
}