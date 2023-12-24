import "./index.css"
import React from 'react'
import { BiAlarm } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoIosBasketball } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Topheader() {
  return (
    <section id="topheader">
        <div className="container">
            <div className="topheader">
<div className="top-left">
    <div className="iconn"><BiAlarm /></div>
    <p>MON - SAT: 6.00 AM - 10.00 PM</p>

</div>

<div className="right">
  
<ul className="icon-list" >
    <li class="icon-item">
      <a href="#" class="icon-link ic"><div className="icc"><FaInstagram /></div></a>
    </li>
    <li class="icon-item">
      <a href="#" class="icon-link"><div className="icc"><CiFacebook /></div>
</a>
    </li>
    <li class="icon-item">
      <a href="#" class="icon-link"><div className="icc"><IoIosBasketball /></div></a>
    </li>
    <li class="icon-item">
      <a href="#" class="icon-link"><div className="icc"><FaYoutube /></div></a>
    </li>
    <li class="icon-item">
      <a href="#" class="icon-link"><div className="icc"><FaLinkedinIn /></div></a>
    </li>    
  </ul>
</div>

</div>
            </div>
       
    </section>
  )
}

export default Topheader