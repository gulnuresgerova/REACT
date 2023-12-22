import React from 'react'
import MainBtn from '../../companent/button'
import "./index.css"
function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer">
                <h1>Footer</h1>
               <MainBtn btnText={"Footer btn"} bg={"pink"}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer