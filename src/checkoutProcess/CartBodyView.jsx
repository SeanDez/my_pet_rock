import React from "react";
import _ from "lodash";
import styled from "styled-components";

export default props => {
  
  return (
    <>
      {
        _.isEmpty(props.cart) === false ?
        props.cart.map(cartItem => (
          <OuterContainer>
            <h1>{ cartItem.sku }</h1>
            <h1>{ cartItem.quantity }</h1>
          </OuterContainer>
        ))
          :
        <OuterContainer>
          <h1>Cart is empty</h1>
        </OuterContainer>
      }
    </>
  );
}

const OuterContainer = styled.div`
  margin: 10vh 10vw;
  height: 400px;
  width: 400px;
`;