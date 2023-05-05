import React, { useState } from "react";
import Starbucks from "../assets/starbucks.jpg";
import { BsCart4 } from "react-icons/bs";
import "./navBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <div className="headernav">
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  href="/Welcome"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Welcome to codilar
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="Sign"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Sign In or{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/Create"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Create an Account
                </a>
              </li>
              <li className="nav-item">
                <select
                  className="select-option"
                  onClick={click ? handleClick : null}
                >
                  <option className="nav-links">vijayawadda</option>
                </select>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-content">
        <div className={click ? "logo-img" : "logo "}>
          <img src={Starbucks} alt="" className="starLogo" />
        </div>
        <div className="header-search">
          <input
            className="header-textbox"
            type="text"
            placeholder="Search entire store here.."
          />
          <div className="cart-icon">
            <BsCart4 />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
