import "./index.css"
import React from 'react'
import team1 from "../../companent/image/team1.png";
import team2 from "../../companent/image/team2.png";
import team3 from "../../companent/image/team3.png";
const Team = () => {
  return (
 <div id="mambers">
     <div className="container">
     <div class="studyes">
     
         
     <span class="study">OUR PORTFOLIOS OF CASES</span>

   <h1 class="studyh1">Featured Case Study</h1>
 </div>
      <div className="mambers">
      
<div class="title">
 
</div>
<div class="card1">
<img src={team1} alt="" />
  <h3>Ethan Welch</h3>
  <p>UX Designer</p>
</div>

<div class="card2">
 <img src={team2} alt="" />
  <h3>Ethan Welch</h3>
  <p>UX Designer</p>
</div>

<div class="card3">
<img src={team3} alt="" />
  <h3>Ethan Welch</h3>
  <p>UX Designer</p>
</div>


      </div>
      </div>
 </div>
  )
}

export default Team