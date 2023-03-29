import React from "react";
import "./Product.css";
import { useStateValue } from "../utils/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    // ADD ITEM TO CART
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info" key={id}>
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
