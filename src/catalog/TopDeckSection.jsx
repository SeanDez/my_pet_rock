import React from "react";
import styled from "styled-components";

import ImageThumbnails from "./ImageThumbnails";


const OuterContainer = styled.div`
  border : 3px dashed orange;
  max-width: 700px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const BrandName = styled.h3`
  color : slategray;
  font-weight: 400;
  max-width: 560px;
`;

const ProductName = styled.h2`
  font-weight: 400;
  max-width: 560px;
  margin: 0;
`;

const SelectedImageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 300px;
  //maxHeight: auto;
  border : 2px dotted deeppink;
`;


const images = [
  require("./images/dragonglass_pendant.jpg"),
  require("./images/dragonglass_pendant2.jpg"),
  require("./images/dragonglass_pendant3.jpg"),
  require("./images/dragonglass_pendant4.jpg"),
  require("./images/dragonglass_pendant5.jpg"),
  require("./images/dragonglass_pendant6.jpg"),
];

// brand, product, main image, featured images
export default props => {
  
  return (
    <OuterContainer>
      <BrandName>DragonStone Trading Company</BrandName>
      <ProductName>Pure DragonGlass, forged from 100% Authentic Dragon Fire</ProductName>
      <SelectedImageContainer style={{ marginTop : '4vh' }}>
        <img src={require('./images/dragonglass_pendant.jpg')} alt='dragonglass pendant'
             style={{
               maxWidth : '100%',
               height : 'auto',
               margin : '0 auto',
               objectFit : "contain",
        }} />
      </SelectedImageContainer>
      <ImageThumbnails images={images} />
    </OuterContainer>
  )
}