import "./index.css"
import React from 'react'
import footer1 from "../../companent/image/logo2_footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="one">
<img src={footer1} alt="" />
<p>Receive updates and latest news direct from Simply enter.</p>
<div className="phone">
  <b>+554 <span>5545 5656</span></b>
</div>
<p>youremail@code.edu.az</p>
          </div>
          <div className="one">
            <nav>
              <ul>
               <h1>
            Location
               </h1>
               <li>Advanced</li>
               <li>Management</li>
               <li>Corporate</li>
               <li>Customer</li>
               <li>Information</li>
                </ul>
            </nav>
          </div>
          <div className="one">
            <nav>
              <ul>
               <h1>
               EXPLORE
               </h1>
               <li>Advanced</li>
               <li>Management</li>
               <li>Corporate</li>
               <li>Customer</li>
               <li>Information</li>
                </ul>
            </nav>
          </div>
          <div className="end">
               <h1>
            Location
               </h1>
        <p>Subscribe now to get daily updates</p>
        <form class="search-box">
  <input type="text" placeholder="search "/>
  <button type="reset"></button>
</form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
