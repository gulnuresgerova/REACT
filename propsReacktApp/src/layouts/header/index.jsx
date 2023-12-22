import React from 'react'
import MainBtn from '../../companent/button'
import "./index.css"
function Header() {
  return (
   <header>
    <div className="container">
        <div className="header">
            <h1>
                Header
            </h1>
            <MainBtn btnText={"Header btn"}/>
        </div>
    </div>
   </header>
  )
}

export default Header