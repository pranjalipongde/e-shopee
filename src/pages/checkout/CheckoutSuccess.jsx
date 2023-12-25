import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Checkout Successful</h2>
        <p>Thank you fir your purchase</p>
        <br />
        <Link to="/order-history">
          <button className="--btn --btn-primary">
            View Order Status &#187;
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
