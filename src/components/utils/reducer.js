export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART":
      // LOGIC FOR ADDING ITEM TO CART
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      // LOGIC FOR REMOVING ITEM FROM CART
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart!`
        );
      }

      return { ...state, cart: newCart };

    default:
      return state;
  }
};

export default reducer;
