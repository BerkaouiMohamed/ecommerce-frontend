import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { contextCard } from "../context/CardContext";
import { contextUser } from "../context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function Order() {
  const { card, } = useContext(contextCard);
  const { auth } = useContext(contextUser);
  const navigate = useNavigate();
  const orderProducts = card.map((prod) => {
    return { product: prod.product._id, quantity: prod.quantity };
  });
  let totalPrice = 0;
  card.forEach((prod) => {
    totalPrice += prod.product.price * prod.quantity;
  });
  const hundleOrder = () => {
    console.log();
    axios
      .post("http://localhost:5000/api/order/", {
        user: auth._id,
        products: orderProducts,
        total: totalPrice,
      },{headers:{
        Authorization:`Bearer ${auth.token}`
    }},)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "success") toast("order is on road");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="order">
        {card.map((product, i) => {
          return (
            <div key={i}>
              {" "}
              <h2>{product.product.title}</h2>
              <p>{product.quantity}</p>
            </div>
          );
        })}
        <h1>total:{totalPrice}</h1>
      </div>
      <Button onClick={hundleOrder}> get order</Button>
      <ToastContainer />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={()=>navigate(-1)}>
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    </div>
  );
}

export default Order;
