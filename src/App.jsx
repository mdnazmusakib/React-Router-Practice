import { useState } from 'react'
import { Outlet,Link,NavLink } from "react-router-dom";
import './App.css'
import { IoIosContacts } from "react-icons/io";

function App() {

  return (
    <>
      <div>
        <h1>React Router Demo</h1>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            {/* <Link to="">Home</Link> */}
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            {/* <Link to="about">About</Link> */}
            <NavLink to="about">About</NavLink>

          </li>
          <li>
            {/* <a href="/contact">Contact Us</a> */}
            {/* <Link to="contact">Contact</Link> */}
            <NavLink to="contact"><IoIosContacts />Contact</NavLink>

          </li>
          <li>
            {/* <Link to="employees">Employees</Link> */}
            <NavLink to="employees">Employees</NavLink>
            {/* <Link to="employees">Employees</Link> */}

          </li>
        </ul>

      </div>
      <Outlet></Outlet>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, temporibus!</p>

    </>
  )
}

export default App
