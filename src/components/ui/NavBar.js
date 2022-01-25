import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
 
const navigate=useNavigate();

    const handdleLogout=()=>{

        navigate('/login',{replace:true});
    };
    return (
        <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
    <NavLink exact activeClassName="active" className=" navbar-brand" to="/">Home</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav">
    <NavLink exact  activeClassName="active"  className=" nav-item nav-link " to="/marvel">Marvel</NavLink>  
    <NavLink exact   activeClassName="active" className=" nav-item nav-link " to="/dc">Dc</NavLink> 
    <NavLink exact   activeClassName="active" className=" nav-item nav-link " to="/search">Search</NavLink> 
    
</div></div>
    <div  className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex  justify-content-md-end"> 
    <ul>
    <span className="ml-10 text-white">usuario </span>
    <button  onClick={handdleLogout}  className=" btn btn-outline-success  " to="/login">logout</button>   
    </ul>
  

{/* {user.name ?
<>
 <button onClick={()=>setUser({})}  className=" btn btn-outline-success  " to="/login">logout</button>  
    <span className="ml-10 text-white">usuario : {user.name}</span>
    </>
:    <NavLink exact   activeClassName="active" className=" nav-item nav-link " to="/login">login</NavLink>  

} */}

  </div>
</nav>
           
    </div>
    )
}



export default NavBar;




