import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Checkout Successful</h2>
        <p>Thank you fir your purchase</p>
        <br />

        <button className="--btn --btn-primary">
          {" "}
          <Link to="/order-history">View Order Status &#187;</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
