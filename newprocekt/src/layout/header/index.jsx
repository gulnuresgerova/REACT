import "./index.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
   
<header>
<div class="container">
        <div class="header">
          <div class="headerLeft">
            <h1 class="logo">Consulting <span>.</span></h1>
          </div>
          <div class="headerRight">
            <nav>
              <ul>
                <li>
                <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                <NavLink to={"/servicestwo"}>servicestwo</NavLink>
                </li>
                <li>
                <NavLink to={"/services"}>services</NavLink>
                </li>
                <li>
                <NavLink to={"/contact"}>contact</NavLink>
                </li>
                <li>
                <NavLink to={"/team"}>team</NavLink>
                </li>
                <li>
                <NavLink to={"/table"}>table</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
   
</header>
  )
}

export default Header