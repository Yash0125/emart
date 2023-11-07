export const initialState = {
  cart: [], // Change this to an array of objects with id and quantity
  user: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );

      let newCart = [...state.cart];

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increment the quantity
        newCart[existingItemIndex].quantity += 0.5;
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        newCart.push({ ...action.item, quantity: 1 });
      }

      return {
        ...state,
        cart: newCart,
      };

    case "REMOVE_FROM_CART":
      // LOGIC FOR REMOVING ITEM FROM CART
      let updatedCart = [...state.cart];

      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (itemIndex >= 0) {
        if (updatedCart[itemIndex].quantity === 1) {
          updatedCart.splice(itemIndex, 1);
        } else {
          updatedCart[itemIndex].quantity -= 0.5;
        }
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the cart!`
        );
      }

      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export default reducer;
