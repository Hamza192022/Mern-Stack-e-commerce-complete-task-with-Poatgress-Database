import React, { useState } from 'react'

const Hooks_basics = () => {

    const [Myname , setmyname]=useState("before update")
//  var data= "hamza"
const firstName=()=>{
    const firstval = Myname
    if(firstval=== "before update"){
        setmyname("after update")
    }
    else{
        setmyname("before update")
    }

    // console.log("hrllo");
    
    
    // setmyname("hamza from updated function1")


}

  return (
    <div>
        <h1>{Myname}</h1>
        <button className='
        btn' onClick={firstName}>click me </button>
    </div>
  )
}

export default Hooks_basics