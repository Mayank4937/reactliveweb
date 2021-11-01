import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComB=()=>{
    const [num,setNum]=useState(1);
    const [pokename,setPokename]=useState();
    const [pokemove,setPokemove]=useState();
    const [abilities,setAbilities] =useState();
    const [abilityArr,setAbilityArr]=useState([]);
    const [moveArr,setMoveArr]= useState([]);
    const getData=async()=>{
        const re= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      
        setPokename(re.data.name);
        setPokemove(re.data.moves.length);
        setMoveArr(re.data.moves);
        setAbilities(re.data.abilities.length);
        setAbilityArr(re.data.abilities);
    }
    useEffect(()=>{
        getData();
    });
return(
    <> 
        <div className="container ">
         <div className="row">
             <div className="col-md-12">
                 <h1 className="poke">Select Your Pokemon</h1>
             </div>
         </div>
        <div className="row">

            <div className="col-md-12">
    <select className="form-control" value={num} onChange={(event)=>{
     setNum(event.target.value);
    }}>
        <option value='1'>1</option>
         <option value='2'>2</option>
         <option value='3'>3</option>
         <option value='4'>4</option>
         <option value='5'>5</option>
         <option value='6'>6</option>
         <option value='7'>7</option>
         <option value='8'>8</option>
         <option value='9'>9</option>
         <option value='10'>10</option>
         <option value='11'>11</option>
         <option value='12'>12</option>
         <option value='13'>13</option>
         <option value='14'>14</option>
         <option value='15'>15</option>
         <option value='16'>16</option>
         <option value='17'>17</option>
         <option value='18'>18</option>
         <option value='19'>19</option>
         <option value='20'>20</option>
         <option value='21'>21</option>
         <option value='22'>22</option>
         <option value='23'>23</option>
         <option value='24'>24</option>
         <option value='25'>25</option>

    </select>
    </div>
    </div>

    </div>
    <div className="container" id="main">
        <div className="row ">
        <div className="col-md-12 m ">
            <h3 className="poke1">This pokemon's name is {pokename} </h3>
            <h3 className="poke1">{pokename} has {abilities} abilities.</h3>
             <ol  className="sub">
                 {abilityArr.map((currVal,ind)=>{
               return <li key={ind}>{currVal.ability.name}</li>
                 })}
             </ol>
            <h3 className="poke1">{pokename} has {pokemove} moves</h3>
            <ol  className="sub">{moveArr.map((currVal,indx)=>{
                return(
                    <>
                    <li key={indx} >
                    {currVal.move.name}
                   </li>
                   
                    </>
                );
            })}</ol>
        </div>
        </div>
        </div>
    </>
);
}
export default ComB;