import React from "react";
import styled from "styled-components";

import ProductSingleCard from "./ProductSingleCard";

const OuterContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  border: 2px dashed hotpink;
  justify-content: center;
`;

const dummyarray = [
  {slug : 'dragonglass_pendant', }
];

for (let i = 0; i < 5; i ++) {
  dummyarray.push(null);
}

export default props => {
  
  return (
    <OuterContainer>
      
      { dummyarray.map((nothing, index) => (
        <ProductSingleCard
          key={index}
          productGridStyles={{ margin : '15px 0' }}
        />
      )) }
    
    </OuterContainer>
  );
};