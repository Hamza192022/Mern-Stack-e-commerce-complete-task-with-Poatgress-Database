import React  ,{useState , useEffect} from 'react';
// this is the data that we use to map in this senario
// import list from '../data';
import Cards from './card';
import "../styles/amazone.css"
import axios from 'axios';


// MAP THE ALL ITEM 
const Amazone = ({handleClick}) => {
    // const [cart,setcart]=useState([]); // this is use state
    // // this function is use to handle the data when we click on the button
    // const handleClick= (item)=>{
    //     // console.log(item); // show data of the individual item in console


    //     // show data of all item in the console 
    //     cart.push(item)
    //     console.log(cart);
    // }
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
      try {
          const response = await fetch('http://localhost:8080/api/products');
        //   {
        //     method :'POST',
        //     headers :{
        //         Accept: "application/json",
        //         "Content-Type" : "application/json"
        //     }
          //  setLoading(false);
          console.log(response)
          setUsers(await response.json());
      } catch (error) {
          // setLoading(false);
          console.log("my error is "+ error);
      }
  }

  useEffect(() => {
      getUsers();
  }, []);


  return(
    <section>
        {users.map((users)=>(
            <Cards  key={users.id} users={users} handleClick={handleClick}/>
        ))}
        
    </section>

  );
}

export default Amazone