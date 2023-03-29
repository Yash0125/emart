import React from "react";
import { useStateValue } from "../utils/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";

const Checkout = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your cart. To buy one or more items , click
              "Add to Cart" next to the item.
            </p>
          </div>
        ) 

        :
        
         (
          <div>
            <h2 className="checkout__title">Your Shopping Cart </h2>
            {cart?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="Checkout__rigth">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
