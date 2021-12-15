import React from 'react'
import classes from '../styles/product.module.css'
import Rating from './Rating'
function ProductCard({productData}) {
    return (
        <div className={classes.product}>
        <div className={classes.image}>
          <img
            src={productData.image}
            alt="shirt"
          />
        </div>
        <div className={classes.product_details}>
          <h3 className={classes.name}>{productData.name}</h3>
          <div className={classes.rating}>
          <Rating stars={productData.rating} numOfReviews={productData.numReviews} />
          </div>
          <p className={classes.price}>${productData.price}</p>
        </div>
      </div>
    )
}

export default ProductCard
