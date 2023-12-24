import "./index.css"
import React from 'react'
import { TiAnchorOutline } from "react-icons/ti";
import { TiArrowMinimiseOutline } from "react-icons/ti";
import { TiArrowSyncOutline } from "react-icons/ti";
const Services = () => {
  return (
    <section id="services">
         <div class="studyes">
     
         
     <span class="study">OUR TOP SERVICES</span>

   <h1 class="studyh1">Our Best Services</h1>
 </div>

<div class="containers">
        <div class="boxes" >
            <div class="content">
                <div class="iconis"><TiAnchorOutline /></div>
                <div class="text">
                    <h3>Strategy Planing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="boxes" >
            <div class="content">
                <div class="iconis"><TiArrowMinimiseOutline /></div>
                <div class="text">
                    <h3>Insurance Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="boxes" >
            <div class="content">
                <div class="iconis"><TiArrowSyncOutline /></div>
                <div class="text">
                    <h3>Audit&Evaluation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Services