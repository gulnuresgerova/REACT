import "./index.css"

import React from 'react'

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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
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