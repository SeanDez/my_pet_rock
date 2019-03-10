import checkoutReducer from "../checkoutReducer";


test('ADD_TO_CART', () => {
  const initialState = { cart : [] };
  const testAction = { type : 'ADD_TO_CART', payload : {
      sku: 2,
      quantity : 1
    } };
  
  expect(checkoutReducer(initialState, testAction)).toEqual({
    cart : [{ sku : 2, quantity : 1 }]
  })
  
});


