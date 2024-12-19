import { useState } from 'react'
import { Outlet,Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>React Router Demo</h1>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <Link to="about">About</Link>
          </li>
          <li>
            {/* <a href="/contact">Contact Us</a> */}
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="employees">Employees</Link>
          </li>
        </ul>

      </div>
      <Outlet></Outlet>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temporibus!</p>

    </>
  )
}

export default App
