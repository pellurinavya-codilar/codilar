import React from "react";
import "./productNav.css";

// const ProductNav = () => {
//   return (
//     <div className="Container">
//       <div className="parent-container">
//         <div className="container">
//           <div className="separator">
//             <ul class="menu-items">
//               <li>
//                 <a href="#" className="link">
//                   What's New
//                 </a>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>Men</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option> Gear</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>Training</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>Sale</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>Organic</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>CPL T-shirt</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>Mobile</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>cars</option>
//                 </select>
//               </li>
//               <li>
//                 <select className="selector" className="selector">
//                   <option>Means Fashion</option>
//                 </select>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="link-home">
//         <div className="Home">
//           <a href="#" className="Home">
//             Home
//           </a>
//         </div>
//         <div className="next">
//           <p>Crown Summit Bakpack</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductNav;
const ProductNav = () => {
  return (
    <>
      <div className="parent-container-nav">
        <div className="container-nav">
          <div className="separator-nav">
            <nav className="navigation">
              <ul className="menu-items">
                <li className="nav">
                  <select className="selector">
                    <option> What's New</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option>Men</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option>Gear</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option>Training</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option> Sale</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option> Oragnic</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option> CPL T-Shirt</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option> Cars</option>
                  </select>
                </li>
                <li className="nav">
                  <select className="selector">
                    <option>Men's Fashion</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="link-home">
        <div className="Home">
          <a href="#" className="Home">
            Home
          </a>
          {">"}
        </div>
        <div className="next">
          <p>Crown Summit Bakpack</p>
        </div>
      </div>
    </>
  );
};

export default ProductNav;
