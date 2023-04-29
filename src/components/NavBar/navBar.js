import React from "react";
import { BsCart4} from 'react-icons/bs';
import{BsSearch} from 'react-icons/bs';
import Image from "../assets/starbucks.jpg";
import "./navbar.css";
const NavBar = () => {
  return (
    
    <div>
      <nav class="navbar">
        <div class="navbar-container container">
          <ul class="menu-items">
            <li>
              <a href="#">Welcome to codilar</a>
            </li>
            <li>
              <a href="#">Sign In or</a> 
            </li>
            <li>
              <a href="#">Create an account</a>
            </li>
            <li>
              <select className="selection">
                <option>vijayawadda</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sub-nav">
        <div className="sub-nav-container">
        <img src={Image} alt="starbucks" className="image"></img>
        </div>
        <div className="search-parent">
          <label >
          
          <input type="search" placeholder={`Search entire store here..${<BsSearch/>}`} className="searchbar"/>
          <BsCart4 size={"22"} color="#6e716e" className="cart-icon"/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
