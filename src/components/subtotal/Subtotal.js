import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../utils/StateProvider";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart?.reduce((amount, item) => item.price + amount, 0));
  }, [cart]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>${total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
