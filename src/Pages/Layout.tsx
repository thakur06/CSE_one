import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default class Layout extends Component {
  render() {
    return (
        <>
        <Link  className='deco' to="/one">one</Link>&nbsp;
        <Link  className='deco' to="/two">two</Link>&nbsp;
        <Link  className='deco' to="/three">three</Link>&nbsp;
        <Link  className='deco' to="/api">API</Link>&nbsp;
        <hr/>
     <div>

<Outlet/>

     </div>
      </>
    )
  }
}
