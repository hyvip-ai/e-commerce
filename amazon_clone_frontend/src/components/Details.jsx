import React, { useState } from "react";
import classes from "../styles/productdetails.module.css";
import Rating from "./Rating";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import cartActions from "../redux/cart/cartActions";

function Details({ productData }) {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
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
          Description :{" "}
          <span className={classes.bold}>{productData.description}</span>
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
        {productData.countInStock > 0 ? (
          <div className={classes.cart}>
            <div className={classes.quantity}>Quantity : <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                {[...Array(productData.countInStock).keys()].map(item=>{return <option key={item} value={item+1}>{item+1}</option>})}
              </select> </div>
            <div>
              <Link to={`/cart/${productData._id}?quantity=${quantity}`}><button onClick={()=>{dispatch(cartActions(productData))}}>Add To Cart</button></Link>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}

export default Details;
