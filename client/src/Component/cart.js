import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (product_id) => {
    const arr = cart.filter((users) => users.product_id !== product_id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((users) => (ans += users.amount * users.product_price));
    setPrice(ans);
  };

  // handle order
  // const handleOrder = (product_id) => {
  // //  const product_name = users.target.product_name.value;
  //  const product_name = cart.filter((users) => users.target.product_name.value
  //  const product_price = users.target.product_price.value;
  // //  const product_name = users.target.product_name.value;
  // axios.post("http://localhost:8080/api/orders",{
  //   product_name,
  //   product_price
  // }).then((Response)=>{
  //   console.log(Response);
  // }).catch((error)=>{
  //   console.log(error)
  // })

  // };


  useEffect(() => {
    handlePrice();
    // handleOrder();
  });

  return (
    <article>
      {cart.map((users) => (
        <div className="cart_box" key={users.product_id}>
          <div className="cart_img">
            <img src={users.product_image} alt="" />
            <p>{users.product_name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(users, 1)}>+</button>
            <button>{users.amount}</button>
            <button onClick={() => handleChange(users, -1)}>-</button>
          </div>
          <div>
            <span>{users.product_price}</span>
            <button onClick={() => handleRemove(users.product_id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
        {/* <button onSubmit={() => handleOrder(users.product_id)}>Order</button> */}
      </div>
    </article>
  );
};

export default Cart;
