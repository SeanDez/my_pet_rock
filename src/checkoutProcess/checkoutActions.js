export default {
  // send a new item to a cart array
  // object: sku, itemId, quantity
  addToCart : (productInfo) => {
    return {
      type : 'ADD_TO_CART',
      payload : {
        ...productInfo // {}, contains sku and quantity
      }
    }
  }
}