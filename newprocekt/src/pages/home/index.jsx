// import Mainbtn from "../../companent/button"
import "./index.css"
import React from 'react'

const Home = () => {
  return (
    <section id="home">
      <div class="container">
        <div class="home">
          <div class="d-flex">
         
            <span class="big">COMMITTED TO SECCESS</span>
          </div>
          <h1 class="help">
            We help to grow <br />
            your business
          </h1>
          <p class="labo">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, assumenda. Assumenda repellendus, magni sint iusto praesentium nostrum. Quaerat, at!
          </p>
         {/* <Mainbtn btnText={"Our services"} bg={"pink"} /> */}
         <div class="galaxy-button">
  <button>
    <span class="spark"></span>
    <span class="backdrop"></span>
    <span class="galaxy__container">
      <span class="star star--static"></span>
      <span class="star star--static"></span>
      <span class="star star--static"></span>
      <span class="star star--static"></span>
    </span>
    <span class="galaxy">
      <span class="galaxy__ring">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </span>
    </span>
    <span class="text">Our services</span>
  </button>
  <div class="bodydrop"></div>
</div>
        </div>
      </div>
    </section>
  )
}

export default Home