import React from "react";
const Showimg=(props)=>{
const img=`https://source.unsplash.com/500x400/?${props.word}`;
    return(<>
   {props.word?<img src={img} alt="nothing found"/>:null}
    </>);
}
export default Showimg;