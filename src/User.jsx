import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';
const User=()=>{
    const loc=useLocation();
    console.log(loc);
    const history= useHistory();
    console.log(history);
    const {fname,lname,mname}=useParams();
    return (<> <br/>
  <button onClick={()=>{
      history.goBack();
  }}>Go Back</button>
  <button onClick={()=>history.push('/component1')}>go to poke</button>
    <h1>{fname} {mname} {lname}</h1>
    <p>{loc.pathname}</p>
    {/* there should be mayank in path then only it will show button*/}
    {loc.pathname===`/user/mayank/${mname}/${lname}`?<button onClick={()=>
    alert("hello")}>Click me</button>:null}
    
    </>)

}
export default User;