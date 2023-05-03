// // import React from "react";
// // import { BsCart4} from 'react-icons/bs';
// // import{BsSearch} from 'react-icons/bs';
// // import Image from "../assets/starbucks.jpg";
// // import "./navbar.css";
// // const NavBar = () => {
// //   return (

// //     <div>
// //       <nav class="navbar">
// //         <div class="navbar-container container">
// //           <ul class="menu-items">
// //             <li>
// //               <a href="#">Welcome to codilar</a>
// //             </li>
// //             <li>
// //               <a href="#">Sign In or</a>
// //             </li>
// //             <li>
// //               <a href="#">Create an account</a>
// //             </li>
// //             <li>
// //               <select className="selection">
// //                 <option>vijayawadda</option>
// //               </select>
// //             </li>
// //           </ul>
// //         </div>
// //       </nav>
// //       <div className="sub-nav">
// //         <div className="sub-nav-container">
// //         <img src={Image} alt="starbucks" className="image"></img>
// //         </div>
// //         <div className="search-parent">
// //           <label >

// //           <input type="search" placeholder={`Search entire store here..${<BsSearch/>}`} className="searchbar"/>
// //           <BsCart4 size={"22"} color="#6e716e" className="cart-icon"/>
// //           </label>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default NavBar;

//Pages
import React, { useState } from "react";
import "./navBar.css";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      {/* <i className="fa-regular fa-magnifying-glass"></i> */}
    </div>
  );
};

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <a href="/" className="nav-logo">
            CodeBucks
            {/* <i className="fa fa-code"></i> */}
            {/* <i className="fa-solid fa-bars"></i> */}
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
