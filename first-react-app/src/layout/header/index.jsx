import React from 'react'
import { IoAccessibilitySharp } from "react-icons/io5";
import "./header.css"
function Header() {
  return (
    <header>
        <div className="container">
            <div className="headher">
                <div className="head-left">
               <div className="icon"> <IoAccessibilitySharp /></div>
                <h1>Electrochip</h1>
                </div>
                <div className="head-right">
                    <nav>
                        <ul>
                            <li><a href="#"></a>HOME</li>
                            <li><a href="#"></a>ABOUT</li>
                            <li><a href="#"></a>SERVICE</li>
                            <li><a href="#"></a>BLOG</li>
                            <li><a href="#"></a>CONTACT</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header