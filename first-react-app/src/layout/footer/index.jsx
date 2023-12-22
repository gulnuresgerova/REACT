import React from "react";
import "./footer.css";
import { IoBalloon } from "react-icons/io5";
import { IoBaseballSharp } from "react-icons/io5";
import { IoBasketball } from "react-icons/io5";
import { IoBowlingBall } from "react-icons/io5";
import { IoDiceSharp } from "react-icons/io5";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="foot-top">
            <div className="top">
              <div className="icone">
                <IoBalloon />
              </div>
              <p>Ballon diyim ha billesin</p>
            </div>

            <div className="top">
              <div className="icone ">
                <IoBalloon />
              </div>
              <p>Ballon diyim ha billesin</p>
            </div>

            <div className="top">
              <div className="icone ">
                <IoBalloon />
              </div>
              <p>Ballon diyim ha billesin</p>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="foot-bottom-left">
              <input
                type="text"
                className="input"
                required
                placeholder="benim balonum nerdee?"
              />
              <div className="btn">
                <button>Bulalim</button>
              </div>
            </div>
            <div className="foot-bottom-right">
              <div className="icone ic">
                <IoBaseballSharp />
              </div>
              <div className="icone ic">
                <IoBasketball />
              </div>
              <div className="icone ic">
                <IoBowlingBall />
              </div>
              <div className="icone ic">
                <IoDiceSharp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
