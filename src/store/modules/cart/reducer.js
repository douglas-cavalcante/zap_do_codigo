
/*
product: {
  id: number;
  title: string;
  price: number;
};
quatity: number;

*/

const INITIAL_STATE = {
  items: [

  ]
}

// recebe dois parametros
// -> state
// -> action

const cart = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {

      const { product } = action.payload;

      const itemExists = state.items.findIndex(item => item.product.id === product.id)

      if (itemExists >= 0) {
        const items = state.items.map(item => {
          
          if(item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })

        return {
          ...state,
          items,
        }
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1
          }
        ]
      }
    }

    case 'UPDATE_PRODUCT_AMOUNT': {

      console.log('entrei UPDATE_PRODUCT_AMOUNT')

      const {amount, id} = action.payload;
      console.log(amount)
      if (amount <= 0) {
        return state;
      }

    
      console.log(id)
    
      const items = state.items.map(item => {
        if(item.product.id === id) {
          console.log('achei')
          return {
            ...item,
            quantity: amount
          }
        }

        return item
      }) 

  

      return {
        ...state,
        items
      }
    }

    default: {
      console.log('Default')
      return state
    }
  }
}

export default cart;