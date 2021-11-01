import React from 'react';
import ComA from './ComA';
import ComB from './ComB';
import ComC from "./ComC";
import ComD from './ComD';
import Error from './Error';
import Menu from './Menu';
import User from './User';
import './index.css';
import {Route,Switch} from "react-router-dom";
import Search from './Search';
const App=()=>{
    return(<>
   
<Menu/>

<Switch>
{/*<Route exact path="/" component={()=><ComA name="first one all right"/>}/> or :*/}
    <Route exact path="/" component={()=>{ return <ComA name="first one all right yu;p"/>}}/>
    <Route exact path='/component1' component={ComB}/>
    {/* use render method as
     it doesnt reload whole component
     unlike component method it just updates changes OR: */}
    <Route exact path='/component2' render={()=><ComC name='component c yea all rigth'/>}/>
    <Route exact path="/component3/:fname/:lname/:tname" component={ComD} />
    <Route exact path="/user/:fname/:mname/:lname" render={()=><User/>}/>
    <Route exact path="/search" render={()=><Search/>}/>
    <Route component={Error}/>
</Switch>
  </>  )
}
export default App;