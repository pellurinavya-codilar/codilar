import React from "react";
import "./otherProducts.css";
let products = [
  {
    description: "Fusion Backpack",
    priceFrom: "₹59",
    img:"../assets/image.jpg",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Wayfarer Messenger",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Rival Field Messenger",
    priceFrom: "₹74",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Impulse Duffle",
    priceFrom: "₹74",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Push It Messenger Bag",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Overnight Duffle",
    priceFrom: "₹45",
    priceTo: "",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "TABLE_LAMP",
    priceFrom: "From ₹2,110.00",
    priceTo: "To ₹2,222.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "MyLaptop",
    priceFrom: "From ₹23,000.00",
    priceTo: "To ₹29,000.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "battery",
    priceFrom: "From ₹72.00",
    priceTo: "To ₹70.00 Regular Price",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "ourlaptop",
    priceFrom: "From ₹68.00",
    priceTo: "₹To 1,767.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "cricket box",
    priceFrom: "From ₹68.00",
    priceTo: "To ₹110.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "myphone",
    priceFrom: "From ₹34.00",
    priceTo: "To ₹72.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "Bundle product",
    priceFrom: "From ₹340.00",
    priceTo: "To ₹450.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
  {
    description: "mob",
    priceFrom: "From ₹34.00",
    priceTo: "To ₹72.00",
    img: "https://testing-mage.codilar.dev/media/catalog/pro…8b1e5b7759603f3935d5f1970ad53d/g/n/gnlyofeo_1.jpg",
  },
];

const OtherProduct = (props) => {
  return (
    <div className="container">
       <p className="message">We found other products you might like!</p>
      <div className="parent-container">
     
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
