export const addProductToCart = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    }
  }
}

export const updateAmount = (id, amount) => {
  console.log(id)
  console.log(amount)
  return {
    type: 'UPDATE_PRODUCT_AMOUNT',
    payload: {
      id,
      amount
    }
  }
}