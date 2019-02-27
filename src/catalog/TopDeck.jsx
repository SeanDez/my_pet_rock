import React from "react";
import styled from "styled-components";

import ImageThumbnails from "./ImageThumbnails";

const BrandName = styled.h3`
  color : slategray;
  text-align: center;
  font-weight: 400;
`;

const ProductName = styled.h2`
  text-align: center;
  font-weight: 400;
`;

const SelectedImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 400px;
  //maxHeight: auto;
  border : 1px dotted deeppink;
`;


const images = [
  require("../images/dragonglass_pendant.jpg"),
  require("../images/dragonglass_pendant2.jpg"),
  require("../images/dragonglass_pendant3.jpg"),
  require("../images/dragonglass_pendant4.jpg"),
  require("../images/dragonglass_pendant5.jpg"),
  require("../images/dragonglass_pendant6.jpg"),
];

// brand, product, main image, featured images
export default props => {
  
  return (
    <React.Fragment>
      <BrandName>DragonStone Trading Company</BrandName>
      <ProductName>Pure DragonGlass, forged from 100% Authentic Dragon Fire</ProductName>
      <SelectedImageContainer style={{ marginTop : '4vh' }}>
        <img src={require('../images/dragonglass_pendant.jpg')} alt='dragonglass pendant'
             style={{
                maxWidth : '100%',
                height : 'auto',
             // maxHeight : '100%',
                objectFit : "contain",
        }} />
      </SelectedImageContainer>
      <ImageThumbnails images={images} />
    </React.Fragment>
  )
}