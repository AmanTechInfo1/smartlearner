export default function CartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { product, quantity } = action.payload;
    console.log(quantity);
    let cartProduct;
    cartProduct = {
      id: product.name + 56,
      name: product.name,
      quantity,
      image: product.image,
      price: product.price,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  return state;
}
