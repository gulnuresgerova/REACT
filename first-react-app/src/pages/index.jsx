import React from "react";
import "./home.css";
import page from "../assets/Nigerians-enjoy-only-an-average-of-7hrs-electricity-from-national-grid-daily-NBS-.jpg";

function Home() {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home-left">
            <h1>Electrical Service Providers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Aperiam rerum maiores voluptatibus? <br /> Voluptatem alias vero ut atque
              accusantium iure voluptas <br /> praesentium hic id dolorum? Eius a
              molestias saepe consequuntur eligendi.
            </p>
            <button>Contact us</button>
          </div>
          <div className="home-right">
            <img src={page} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
