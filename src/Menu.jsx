import React from 'react';
import {NavLink} from 'react-router-dom';
const Menu=()=>{
return(
    <> 
    <div className="container">
        <div className="row">
        <div className="col-md-2 bg-success">
     <NavLink exact activeClassName="active" className="nonactive" to="/">One</NavLink>
    </div>
    <div className="col-md-2 bg-info">
    <NavLink exact activeClassName="active" className="nonactive" to="/component1">POKEMON</NavLink>
    </div>
    <div className="col-md-2 bg-danger">
    <NavLink exact activeClassName="active" className="nonactive" to="/component2">three</NavLink>
  
    </div>
    <div className="col-md-2 bg-info">
        <NavLink exact activeClassName="active"  className="nonactive" to="/component3/mayank/singh/chaudhary" >
      third  </NavLink>
    </div>
    <div className="col-md-2 bg-info">
        <NavLink exact activeClassName="active"  className="nonactive" to="/user/mayank/singh/chaudhary" >
      User</NavLink>
    </div>
    <div className="col-md-2 bg-info">
        <NavLink exact activeClassName="active"  className="nonactive" to="/search" >
      Search</NavLink>
    </div>
</div>
</div>
   
    
 
   </>
);
}
export default Menu;