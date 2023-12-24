import "./index.css"
import React from 'react'
import page1 from "../../companent/image/services1.png";
import page2 from "../../companent/image/services2.png";
import page3 from "../../companent/image/services3.png";
import page4 from "../../companent/image/services4.png";
const Study = () => {
  return (
    <section id="studyes">
    <div class="container">
      <br />
      <div class="studyes">
     
         
          <span class="study">OUR PORTFOLIOS OF CASES</span>
     
        <h1 class="studyh1">Featured Case Study</h1>
      </div>
    <div className="study-member">
      <div className="box">
        <div className="imgBox">
          <img src={page1} alt="" />
        </div>
        <div className="content">
          <h2>
          Strategy planing <br />
          <span>Lorem ipsum dolor</span>
          </h2>
        </div>
      </div>
      <div className="box">
        <div className="imgBox">
          <img src={page2} alt="" />
        </div>
        <div className="content">
          <h2>
          Strategy planing <br />
          <span>Lorem ipsum dolor</span>
          </h2>
        </div>
      </div>
      <div className="box">
        <div className="imgBox">
          <img src={page3} alt="" />
        </div>
        <div className="content">
          <h2>
          Strategy planing <br />
          <span>Lorem ipsum dolor</span>
          </h2>
        </div>
      </div>
      <div className="box">
        <div className="imgBox">
          <img src={page4} alt="" />
        </div>
        <div className="content">
          <h2>
          Strategy planing <br />
          <span>Lorem ipsum dolor</span>
          </h2>
        </div>
      </div>
      <div className="box">
        <div className="imgBox">
          <img src={page1} alt="" />
        </div>
        <div className="content">
          <h2>
          Strategy planing <br />
          <span>Lorem ipsum dolor</span>
          </h2>
        </div>
      </div>
      <div className="box">
        <div className="imgBox">
          <img src={page2} alt="" />
        </div>
        <div className="content">
          <h2>
          Strategy planing <br />
          <span>Lorem ipsum dolor</span>
          </h2>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default Study