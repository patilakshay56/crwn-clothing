import { CartActionTypes } from './cart.types';

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      console.log(!state.hidden);
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
