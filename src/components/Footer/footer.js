import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-parent">
        <div className="menu-one-class">
          <ul class="menu-one">
            <li className="list-element">
              <a className="link" href="#">
                About Us
              </a>
            </li>
            <li className="list-element">
              <a className="link" href="#">
                Customer Service
              </a>
            </li>
            <li className="list-element">
              <a className="link" href="#">
                Test
              </a>
            </li>
            <li className="list-element">
              <select className="select-different">
                <option>Krishna</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="menu-two-class">
          <ul className="menu-two">
            <li className="list-element">
              <a className="link" href="#">
                Privacy and Cookies
              </a>
            </li>
            <li className="list-element">
              <a className="link" href="#">
                Search Terms
              </a>
            </li>
            <li className="list-element">
              <a className="link" href="#">
                Advance Search
              </a>
            </li>
            <li className="list-element">
              <a className="link" href="#">
                Orders and Returns
              </a>
            </li>
            <li className="list-element">
              <a className="link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="input-field">
        <input
          type="email"
          placeholder="Enter your email address"
          className="input-inner"
        ></input>

        <button className="email_button"> Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
