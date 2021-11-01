import React, { useState } from 'react';
import Showimg from './Showimg';
const Search=()=>{
const [image,setImage]=useState();
const inputEvent=(event)=>{
  setImage(event.target.value);
}
    return(<> <br/>
    <input type="text" value={image} onChange={inputEvent} placeholder="Search image"/>
<br/>
<Showimg word={image}/>
    </>);
}
export default Search;