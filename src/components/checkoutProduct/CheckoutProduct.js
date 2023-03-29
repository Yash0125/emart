import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../utils/StateProvider";

const CheckoutProduct = ({ id, title, image, price }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct" key={id}>
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
