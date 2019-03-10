import React, { useEffect } from "react";
import styled from "styled-components";

import ImageThumbnails from "./ImageThumbnails";
import Button from "@material-ui/core/Button";
import ProductOptions from "./ProductOptions";


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
  padding: 0 4vw 0 4vw;
`;

const ProductName = styled.h2`
  font-weight: 400;
  max-width: 560px;
  margin: 0;
  padding: 0 4vw 0 4vw;
`;

const SelectedImageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 300px;
  //maxHeight: auto;
  border : 2px dotted deeppink;
`;

const JumboBuyButton = styled(Button)`
  //padding: 3vh 20vw !important;
  max-width: 400px !important;
  font-size: 1.2rem !important;
  text-transform: none !important;
`;

const ShortDescription = styled.p`
  font-size: 1rem;
  color: #282c34;
  max-width: 700px;
  padding: 0 4vw 0 4vw;
`;

const TopLayoutController = styled.div`

  @media (min-width: 600px) {
    display : grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "images deckSection";
    grid-gap: 1rem;
  }
`;

const ImageGridArea = styled.div`
  grid-area: images;
`;

const DeckGridArea = styled.div`
  grid-area: deckSection;
`;

const [sku, quantity] = [2, 1];

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
  
  useEffect(() => {
    
    console.log(props.cart, `=====props.cart=====`);
  });
  
  return (
    <OuterContainer>
      <TopLayoutController>
        <DeckGridArea>
          <BrandName>DragonStone Trading Company</BrandName>
          <ProductName>Pure DragonGlass, forged from 100% Authentic Dragon Fire</ProductName>
          <ShortDescription>
            Forged from the flames of 100% authentic dragon fire, this real pendant could enable your family to live a
            long, healthy life, or a mindless eternity in the army of the dead should it be misplaced.
          </ShortDescription>
          <ShortDescription>
            Imbued with special properties guaranteed to work against White Walkers and Giants. Very limited supply,
            order before our stock runs out for good!
          </ShortDescription>
  
          <ProductOptions />
          
          <JumboBuyButton
            variant="contained"
            color='primary'
            style={ {marginTop : "3vh"} }
            onClick={() => props.addToCart({sku, quantity}) }
          >
            Add to Cart
          </JumboBuyButton>
        </DeckGridArea>
  
        <ImageGridArea>
          <SelectedImageContainer style={ {marginTop : "4vh"} }>
            <img src={ require("../images/dragonglass_pendant.jpg") } alt='dragonglass pendant'
                 style={ {
                   maxWidth  : "100%",
                   height    : "auto",
                   margin    : "0 auto",
                   objectFit : "contain",
                 } } />
          </SelectedImageContainer>
          <ImageThumbnails images={ images } />
        </ImageGridArea>
      </TopLayoutController>
    </OuterContainer>
  );
}