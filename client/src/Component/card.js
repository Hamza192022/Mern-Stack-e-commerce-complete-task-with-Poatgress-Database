import React from "react";



// this is use to render the individual components

const Card = ({users ,handleClick}) => {
    const{id, title, product_descrip, product_image, product_id,product_color, product_price, product_quantity,product_name,amount}=users;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={product_image} alt="" />
      </div>
      <div className="details">
        <p>{product_color}</p>
        <p>{product_descrip}</p>
        <p>Price - {product_price}Rs</p>
        <button onClick={() => handleClick(users)}>Order Now</button>
      </div>
    </div>
  )
}

export default Card;