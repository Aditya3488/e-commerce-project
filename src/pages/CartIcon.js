import React from "react";
import "./CartIcon.css";

const CartIcon = ({ count }) => {
  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart"></i>
      {count > 0 && <span className="cart-badge">{count}</span>}
    </div>
  );
};

export default CartIcon;
