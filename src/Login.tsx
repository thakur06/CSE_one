import { useState } from "react";
import React from 'react'
import Logout from "./Logout"
export default function Login() {
    const [login,setLogin] = useState(false);
    console.log(login)
  return (
    <>
    {!login?<button onClick={()=>{
        setLogin(true);
    }}>Login</button>:<Logout/>}</>
  )
}
