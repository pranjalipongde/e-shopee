import React, { useEffect, useState } from "react";
import styles from "./OrderDetails.module.scss";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import { Link, useParams } from "react-router-dom";
import spinnerImg from "../../../assets/spinner.jpg";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  console.log(order);

  return (
    <>
      <div className={styles.table}>
        <h2>Order Details</h2>

        <div>
          <Link to="/admin/orders">&larr; Back To Order</Link>
          <br />
          {order === null ? (
            <img src={spinnerImg} alt="Loading..." style={{ width: "50px" }} />
          ) : (
            <>
              <p>
                <b>Order ID : </b>
                {order.id}
              </p>
              <p>
                <b>Order Amount : </b>${order.orderAmount}
              </p>
              <p>
                <b>Order Status : </b>
                {order.orderStatus}
              </p>

              <p>
                <b>Shipping Address : </b>
                <br />
                Address : {order.shippingAddress.line1},{" "}
                {order.shippingAddress.line2},
                {order.shippingAddress.cartQuantity} <br />
                State: {order.shippingAddress.state}
                <br />
                Country: {order.shippingAddress.country}
              </p>
              <br />

              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {order.cartItems.map((cart, index) => {
                    const { id, name, price, imageURL, cartQuantity } = cart;
                    return (
                      <tr key={id}>
                        <td>
                          <b>{index + 1}</b>
                        </td>

                        <td>
                          <p>
                            <b>{name}</b>
                          </p>
                          <img
                            src={imageURL}
                            alt={name}
                            style={{ width: "100px" }}
                          />
                        </td>

                        <td>{price}</td>

                        <td>{cartQuantity}</td>

                        <td>{(price * cartQuantity).toFixed(2)}</td>

                        <td className={styles.icon}>
                          <button className="--btn --btn-primary">
                            <Link to={`/review-product/${id}`}>
                              Review Product{" "}
                            </Link>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
