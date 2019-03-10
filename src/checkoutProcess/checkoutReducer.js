import _ from "lodash";

const startingState = {
  cart: [],
};

const checkoutReducer = (previousState = startingState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // if sku is in cart, add to that object
      // else push new object
      
      const indexOfCurrentSku = previousState.cart.findIndex(item => item.sku === action.payload.sku);
      
      if (indexOfCurrentSku >= 0) {
        return {
          ...previousState,
          // add the quantity
          cart : previousState.cart[indexOfCurrentSku].quantity += action.payload.quantity,
        };
      } else {
        return {
          ...previousState,
          // cart : previousState.cart += previousState.cart.push(action.payload) // returns [Object Object 1]
            cart : [...previousState.cart, action.payload]
        }
      }
    default:
      return previousState;
  }
};

export default checkoutReducer;