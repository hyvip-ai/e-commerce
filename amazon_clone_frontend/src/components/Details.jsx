import React from "react";
import classes from "../styles/productdetails.module.css";
import Rating from "./Rating";
function Details({ productData }) {
  return (
    <React.Fragment>
      <div className={classes.image}>
        <img src={productData.image} alt={productData.name} />
      </div>
      <div className={classes.product_details_container}>
        <div className={classes.name}>{productData.name}</div>
        <div className={classes.rating}>
          <Rating
            stars={productData.rating}
            numOfReviews={productData.numReviews}
          />
        </div>
        <div className={classes.price}>
          Price : <span className={classes.bold}>${productData.price}</span>
        </div>
        <div className={classes.description}>
          Description : <span className={classes.bold}>{productData.description}</span>
        </div>
      </div>
      <div className={classes.seller_container}>
        <div className={classes.seller}>
          Seller : <span className={classes.bold}>{productData.brand}</span>
        </div>
        <div className={classes.price}>
          Price : <span className={classes.bold}>${productData.price}</span>
        </div>
        <div className={classes.status}>
          Status :
          {productData.countInStock > 0 ? (
            <span className={classes.avaialable}>In Stock</span>
          ) : (
            <span className={classes.unavaialable}>Unavailable</span>
          )}
        </div>
        <button>Add To Cart</button>
      </div>
    </React.Fragment>
  );
}

export default Details;
