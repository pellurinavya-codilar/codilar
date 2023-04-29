import React from "react"
import "./footer.css";

const Footer = () => {
  return (
    <div className="ContainerMain">
        <div className="container-parent">
        <div className="menu-one-class">
        <ul class="menu-one">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Customer Service</a> 
            </li>
            <li>
              <a href="#">Test</a>
            </li>
            <li>
              <select className="select-different">
                <option>Krishna</option>
              </select>
            </li>
            </ul>
            </div>
            <div className="menu-two-class">
            <ul className="menu-two">
            <li>
              <a href="#">Privacy and Cookies</a> 
            </li>
            <li>
              <a href="#">Search Terms</a>
            </li>
            <li>
              <a href="#">Advance Search</a>
            </li>
            <li>
              <a href="#">Orders and Returns</a> 
            </li>
            <li>
              <a href="#">Contact Us</a> 
            </li>
            </ul>
            </div>
            </div>
            <div className="input-field">
                <input type="email" placeholder="Enter your email address" className="input-inner"></input>
                <button className="email_button">Subscribe</button>
            </div>
            </div>
            
            
        
  )
};

export default Footer;
