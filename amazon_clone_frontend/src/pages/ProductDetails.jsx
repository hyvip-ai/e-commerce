import React from 'react'
import Back from '../components/Back'
import Comments from '../components/Comments'
import classes from '../styles/productdetails.module.css'
function ProductDetails() {
    return (
        <div className={classes.grid_container}>
        <Back />
         <main className={classes.product_details}>
           
         </main>
        <div className={classes.comment_container}>
            <h2 style={{marginLeft:"10px"}}>Comments:</h2>
        <Comments />
        </div>
         <footer>All Rights Reserved</footer>
       </div>
    )
}

export default ProductDetails
