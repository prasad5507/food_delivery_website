import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreConext } from "../../Context/StoreContext";

const PlaceOrde = () => {
  const { getTotalCartAmount } = useContext(StoreConext);
  return (
    <from className="Place-order">
      <div className="place-order-left">
        <p className="title">Delevary Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="Frist Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email name" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-totals-details">
              <p>Sub total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <p>Delevary fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </from>
  );
};

export default PlaceOrde;
