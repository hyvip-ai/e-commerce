import React from 'react'
import classes from '../styles/product.module.css'
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
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className={classes.price}>${productData.price}</p>
        </div>
      </div>
    )
}

export default ProductCard
