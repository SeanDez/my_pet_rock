import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ImageThumbnails from "./ImageThumbnails";
import Button from "@material-ui/core/Button";
import ProductOptions from "./ProductOptions";


export const searchForDefaultSku = productData => {
  return productData.skus.filter(sku => sku.default)[0]
  // need to specify [0] to extract from array
};



const [sku, quantity] = [2, 1];


// brand, product, main image, featured images
export default props => {
  const [selectedSku, setSelectedSku] = useState(null);
  // set the sku on option changes
  // local. on cart add it becomes global
  const [productOptions, setProductOptions] = useState(null);
  
  
  // set the default sku
  useEffect(() => {
    if (selectedSku === null) {
      console.log( `=====fired in selectedSku if=====`);
      setSelectedSku(searchForDefaultSku(props.data));
    }
  });
  
  
  useEffect(() => {
    // set the default productOptions on mount
    if (productOptions === null && selectedSku) {
      console.log( `=====fired in productOptions if=====`);
      setProductOptions({ ...selectedSku.options })
    }
  }, [selectedSku, productOptions]);
  
  
  return (
    <OuterContainer>
      { console.log(selectedSku, `=====selectedSku=====`) }
      { console.log(productOptions, `=====productOptions=====`) }
      <TopLayoutController>
        <DeckGridArea>
          <BrandName>{ props.data.brandName }</BrandName>
          
          <ProductName>{ props.data.productName }</ProductName>
          
          { // short description
            props.data.shortDescription.map((paragraph, index) => (
              <ShortDescription key={index}>
                {paragraph}
              </ShortDescription>
            ))
          }
          
          <ProductOptions
            productOptionsState={productOptions}
            options={ props.data.productOptions }
            setProductOptions={setProductOptions}
          />
          
          <JumboBuyButton
            variant="contained"
            color='primary'
            style={ {marginTop : "3vh"} }
            onClick={ () => props.addToCart({sku, quantity}) }
          >
            Add to Cart
          </JumboBuyButton>
        </DeckGridArea>
        
        <ImageGridArea>
          { selectedSku ?
            <>
            <SelectedImageContainer style={ {marginTop : "4vh"} }>
              <SelectedImage
                src={ `${ process.env.PUBLIC_URL }${ selectedSku.images[0] }` }
              />
            </SelectedImageContainer>
            <ImageThumbnails images={selectedSku.images} />
            </>
            :
            null
          }
        </ImageGridArea>
      </TopLayoutController>
    </OuterContainer>
  );
}


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

const SelectedImage = styled.img`
  max-width  : 100%;
  max-height    : 320px;
  margin    : 0 auto;
  padding : 0 auto;
  object-fit : contain;
`

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
  //border : 2px dashed blue;
`;

const DeckGridArea = styled.div`
  grid-area: deckSection;
`;

