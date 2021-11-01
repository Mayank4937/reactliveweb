import React from "react";
import {useParams} from 'react-router-dom';
/*const ComD=({match})=>{
return(
    <>
    <h1>my name is {match.params.fname} {match.params.lname}</h1>
    </>
);
}*/
const ComD=()=>{
 const {fname,lname,tname}=useParams();
    return <h1>
my new name is {fname} {lname} {tname}
    </h1>
}
export default ComD;