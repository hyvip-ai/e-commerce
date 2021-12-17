import { SAVE_ITEM_TO_CART } from "./cosntants";

const initialState = { cartProducts: [] };
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ITEM_TO_CART: {
      let cartProducts = [...state.cartProducts]
      cartProducts.push(action.payload)
      console.log(cartProducts)
      console.log(action.payload);
      return {
        ...state,
        cartProducts
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default cartReducers;
