// import React from 'react'
// import Resturent  from './components/basics/Resturent'
// import useState from './components/Hooks/useState'
// import Form from './Form_Project'  form project code 
// import Hooks_basics from './MERN_REACT_COMPLETE/Hooks_basics'
// import Axio_s from './Axio_s'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React ,{useState} from "react";
import Navbar from "./Component/navbar";
import Amazone from "./Component/amazone";
import Cart from "./Component/cart";



const App = () => {
  //            MY FIRST PROJECT IN REACT      ==> RESTURENT MANU 
  // return  <Resturent/> 


  //            MY 2ND PROJECT IN REACT      ==> COUNTER 
    // return  <useState/>


  //            MY 3ND PROJECT IN REACT      ==> FORM VALIDATION 

  // return  <Form/>

  //                          Amir bhai task  router
  
  // return  <Axio_s/>

  //                        task submissions



  const [show ,setShow]=useState(true) // open for the resources 

  // this is called uplipting
  const [cart,setCart]=useState([]); // this is use state
  // this function is use to handle the data when we click on the button
  const handleClick= (users)=>{
      // console.log(item); // show data of the individual item in console


      // show data of all item in the console 
      // cart.push(item)
      // console.log(cart);

      if (cart.indexOf(users) !== -1) return;
    setCart([...cart, users]);
  }
  const handleChange = (users, d) => {
    const ind = cart.indexOf(users);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <>

    <Navbar setShow={setShow} size={cart.length}/>
    {/* the below line for show when we click on it */}
    {/* {show ? <Amazone handleClick={handleClick}/>:"cart"} */} 

    {show ? (
        <Amazone handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    {/* <Amazone/> */}

    </>
  )

  

}

export default App