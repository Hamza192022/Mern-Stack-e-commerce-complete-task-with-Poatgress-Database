import {Link} from "react-router-dom"

function navigation() {
  return (
    <>
     <Link to="/" class="btn btn-danger" style={{color:"green"}}>HOME</Link> <span></span>
    <Link to="/about" class="btn btn-primary">ABOUT</Link>
    <Link to="/Contact" class="btn btn-primary">CONTACT</Link>
   </>
  )
}

export default navigation;
