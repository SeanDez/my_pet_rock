import React from "react";
import styled from "styled-components";


// const mainImage = require(`${process.env.PUBLIC_URL}/images/placeholder-200x200.jpg`);
const mainImage = '/images/placeholder-200x200.jpg';
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
        [null, null].map((nothing, index) => (
          <OuterContainer key={index}>
            <img src={`${process.env.PUBLIC_URL}${mainImage}`} style={{
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
            <p style={{ fontSize : '.9rem', textDecoration : 'none', marginTop : '-1vh' }}><a href='#'>View</a></p>
          </OuterContainer>
        ))
      }
    </React.Fragment>
  )
}