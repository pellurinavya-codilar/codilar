import React from "react";
import DEFAULT from "../assets/image.jpg";
import MOB from "../assets/mob.jpg";
import LAPTOP from "../assets/laptop.jpg";
import CRICKET from "../assets/cricketbox.jpg";
import MYPHONE from "../assets/myphone.jpg";
import "./otherProducts.css";
let products = [
  {
    description: "Fusion Backpack",
    priceFrom: "₹59",
    img: `${DEFAULT}`,
  },
  {
    description: "Wayfarer Messenger",
    priceFrom: "₹45",
    priceTo: "",
    img: `${DEFAULT}`,
  },
  {
    description: "Rival Field Messenger",
    priceFrom: "₹74",
    priceTo: "",
    img: `${DEFAULT}`,
  },
  {
    description: "Impulse Duffle",
    priceFrom: "₹74",
    priceTo: "",
    img: `${DEFAULT}`,
  },
  {
    description: "Push It Messenger Bag",
    priceFrom: "₹45",
    priceTo: "",
    img: `${DEFAULT}`,
  },
  {
    description: "Overnight Duffle",
    priceFrom: "₹45",
    priceTo: "",
    img: `${DEFAULT}`,
  },
  {
    description: "TABLE_LAMP",
    priceFrom: "From ₹2,110.00",
    priceTo: "To ₹2,222.00",
    img: `${DEFAULT}`,
  },
  {
    description: "MyLaptop",
    priceFrom: "From ₹23,000.00",
    priceTo: "To ₹29,000.00",
    img: `${DEFAULT}`,
  },
  {
    description: "battery",
    priceFrom: "From ₹72.00",
    priceTo: "To ₹70.00 Regular Price",
    img: `${DEFAULT}`,
  },
  {
    description: "ourlaptop",
    priceFrom: "From ₹68.00",
    priceTo: "₹To 1,767.00",
    img: `${LAPTOP}`,
  },
  {
    description: "cricket box",
    priceFrom: "From ₹68.00",
    priceTo: "To ₹110.00",
    img: `${CRICKET}`,
  },
  {
    description: "myphone",
    priceFrom: "From ₹34.00",
    priceTo: "To ₹72.00",
    img: `${MYPHONE}`,
  },
  {
    description: "Bundle product",
    priceFrom: "From ₹340.00",
    priceTo: "To ₹450.00",
    img: `${DEFAULT}`,
  },
  {
    description: "mob",
    priceFrom: "From ₹34.00",
    priceTo: "To ₹72.00",
    img: `${DEFAULT}`,
  },
];

const OtherProduct = (props) => {
  return (
    <div className="container-product">
      <p className="message">We found other products you might like!</p>
      <div className="parent-container-product">
        {products.map((item, index) => {
          return (
            <div className="product-container">
              <div className="productcontainer" key={index}>
                <div className="product-display-info">
                  <img
                    className="productimage"
                    alt={item.description}
                    src={item.img}
                  ></img>
                  <p className="itemDesc">{item.description}</p>
                  <p className="priceFrom">{item.priceFrom}</p>
                  <p className="priceTo">{item.priceTo}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProduct;
