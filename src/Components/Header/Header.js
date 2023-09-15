import React from "react";
import "./Header.css";
import Logo from "../image/relocate.png";
import Menu from "../image/burger menu.png";
import Arrow from "../image/стрелка.png";

function Header() {
  return (
    <header>
      <div>
        <div className="container">
          <nav className="nav">
            <div>
              <img className="logo" src={Logo} alt="" />
            </div>
            <div className="ul-menu">
              <ul className="ul">
                <li>
                  <a className="link" href="">
                    Destinations
                  </a>
                </li>
                <li>
                  <a className="link" href="">
                    Deals
                  </a>
                </li>
                <li>
                  <a className="link" href="">
                    Explore
                  </a>
                </li>
                <li>
                  <a className="link" href="">
                    Resources
                  </a>
                </li>
              </ul>
              <img className="menu" src={Menu} alt="" />
            </div>
          </nav>
        </div>
      </div>
      <section className="header-section">
        <div className="container">
          <div className="flex-header">
            <div className="header-div">
              <p>make the right</p>
              <h2>move.</h2>
            </div>
            <div className="header-img">
              <img src={Arrow} alt="" />
              <span>
                <div>EXPLORE</div>
                <div>DESTINATIONS</div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
