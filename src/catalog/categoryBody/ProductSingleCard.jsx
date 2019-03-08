import React from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const image200PxSquare = require("../images/placeholder-200x200.jpg");

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  box-sizing: border-box;
  width: 210px;
  min-height: 330px;
  //border: 1px solid gray;
  &:hover {
    border: 1px solid gray;
  }
`;

const PriceText = styled.h4`
  margin: 15px 0;
  font-weight: 400;
`

const ScratchedOutPriceText = styled.span`
  margin-left: 10px;
  text-decoration: line-through;
  font-style: italic;
`;

const ProductName = styled.h4`
  margin: 15px 0 0 0;
  font-weight: 300;
`;

const ViewButton = styled(Button)`
  width: 80%;
  &:hover {
    background-color: dodgerblue !important;
  }
`;

const ImageContained = styled.img`
  object-fit: contain !important;
`;

export default props => {
  
  return (
    <OuterContainer style={props.productGridStyles}>
      <ImageContained src={image200PxSquare} />
      <ProductName>Product Name</ProductName>
      <PriceText>$30.00
        <ScratchedOutPriceText>$89.99</ScratchedOutPriceText>
      </PriceText>
      <ViewButton
        variant='contained'
      >View Product</ViewButton>
    </OuterContainer>
  )
}