import React from "react";
import { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [data, setData] = useState({});
  const [selectedButton, setSelectedButton] = useState(null);
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = (buttonId, text) => {
    setSelectedButton(buttonId);
    setDisplayText(text);
  };

  useEffect(() => {
    ApiUtil(`
  
query {
  products(
    filter: { activity:{
        
    }             
      sku: { eq: "24-MB03" } }
    pageSize: 20
    currentPage: 1
    sort: {}
  ) {
    items {
      name
      image {
        url
      }
      price_range {
        maximum_price {
          final_price {
            value
          }
        }
      }
      description {
        html
      }
      reviews {
        items {
          summary
          ratings_breakdown {
            name
            value
          }
          nickname
          created_at
          text
        }
      }
    }
  }
}
  
`);
    async function ApiUtil(query) {
      const rawResponse = await fetch("/graphql", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });
      const jsonResponse = await rawResponse.json();
      console.log(jsonResponse);
      setData(jsonResponse);
      return jsonResponse;
    }
  }, []);

  console.log(data);
  return (
    <div>
      {data.data?.products?.items.map((item, index) => {
        return (
          <div className="product-container-content" key={index}>
            <div className="product-display">
              <div className="product-image">
                <img className="bagimage" src={item.image.url} alt="bag" />
              </div>
              <div className="product-description">
                <p className="display-title"> {item.name}</p>
                <a href="#" className="review">
                  Be the first to review this product
                </a>
                <div className="parent-price">
                  <div>
                    <p className="price">
                      ₹{item.price_range.maximum_price.final_price.value}
                    </p>
                  </div>
                  <div className="price-tag">
                    <div className="instock-parent">
                      <p className="instock"> IN STOCK</p>
                    </div>
                    <div>
                      <p>SKU#: 24-MB03</p>
                    </div>
                  </div>
                </div>

                <div className="quantity-parent">
                  <label className="quanity"> Qty</label>
                </div>
                <div className="quanity-number">
                  <input type="text" className="quantitynumber" />
                </div>
                <div className="button-parent">
                  <button className="addtocart"> Add to Cart</button>
                </div>

                <div className="wishlist">
                  <div className="icon-class">
                    <i class="fa-sharp fa-solid fa-heart"></i>
                    <p className="wishlist-text">ADD TO WISH LIST</p>
                  </div>
                  <div className="icon-class">
                    <i className="fa-sharp fa-solid fa-chart-simple"></i>
                    <p className="wishlist-text">ADD TO COMPARE</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="product-info-more-button"
                onClick={() =>
                  handleButtonClick(
                    1,
                    <div className="product-info-description">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.description.html,
                        }}
                      />
                    </div>
                  )
                }
              >
                Details
              </button>
              <button
                className="product-info-more-button"
                onClick={() =>
                  handleButtonClick(
                    2,
                    <div className="product-info-description">
                      <table>
                        <tbody>
                          <tr>
                            <th className="column-head" scope="row">
                              Activity
                            </th>
                            <td className="column-data" data-th="Activity">
                              Gym, Hiking, Overnight, School, Trail, Travel,
                              Urban
                            </td>
                          </tr>
                          <tr>
                            <th className="column-head" scope="row">
                              Style
                            </th>
                            <td className="column-data" data-th="Activity">
                              Backpack
                            </td>
                          </tr>
                          <tr>
                            <th className="column-head" scope="row">
                              Material
                            </th>
                            <td className="column-data" data-th="Activity">
                              Nylon, Polyester
                            </td>
                          </tr>
                          <tr>
                            <th className="column-head" scope="row">
                              Strap/Handle
                            </th>
                            <td className="column-data" data-th="Activity">
                              Adjustable, Double, Padded
                            </td>
                          </tr>
                          <tr>
                            <th className="column-head" scope="row">
                              Features
                            </th>
                            <td className="column-data" data-th="Activity">
                              Audio Pocket, Waterproof, Lightweight, Reflective,
                              Laptop Sleeve
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                }
              >
                More Information
              </button>
              <button
                className="product-info-more-button"
                onClick={() =>
                  handleButtonClick(
                    3,
                    <div className="product-info-description">
                      <p className="list-item-header">Customer Review</p>
                      {item.reviews.items.map((review, index) => {
                        return (
                          <ol key={index} className="order-list-info">
                            <li>
                              <p className="review-header">{review.summary}</p>
                              <div className="review-block">
                                <p className="review-rating">Rating</p>
                                {/* <p>{review.ratings_breakdown.name}</p> */}
                                <p className="review-description">
                                  {review.text}
                                </p>
                              </div>
                              <p>Review by{review.nickname}</p>
                              <p>{review.created_at}</p>
                            </li>
                          </ol>
                        );
                      })}
                    </div>
                  )
                }
              >
                Reviews
              </button>
              <div>{selectedButton && <p>{displayText}</p>}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
