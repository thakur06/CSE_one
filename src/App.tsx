import React from 'react';

import './App.css';
import {Button} from './Button';
import Classone from './Classone';
import Input from './Input';
import Login from './Login';
import Test2 from './Test2';
import { Router, Routes ,Route } from 'react-router-dom';
import Three from './Pages/Three';
import Two from './Pages/Two';
import One from './Pages/One';
import Layout from './Pages/Layout';
import Api from './Pages/Api';
import SingleUser from './Pages/SingleUser';

function App() {
  return (
    // <div style={{textAlign:'center'}}>
    // <Button handleClick={(event)=>{
    //   alert("hello")
    // }}  handleInput={(event)=>{
    //  if(event.target.value.trim()!==null && event.target.value.trim()!==undefined && event.target.value.trim()!=="")
    //   console.log(event.target.value)
    // }}/> </div>

<div id='d1'>
    <Routes>
      <Route path='/' element={<Layout/>}>
<Route path='/one' element={<One/>}></Route>
<Route path='/two' element={<Two/>}></Route>
<Route path='/three' element={<Three/>}></Route>
<Route path='/api' element={<Api/>}></Route>
<Route path='/Suser/:id' element={<SingleUser/>}></Route>
</Route>
    </Routes></div>
   
  );
}

export default App;
