import React from "react";
import { useParams } from "react-router-dom";
import Back from "../components/Back";
import Comments from "../components/Comments";
import Details from "../components/Details";
import classes from "../styles/productdetails.module.css";
import products from "../data/products";

function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);
  const productData = products.products.find((item) => {
    return item._id === productId;
  });
  console.log(productData);
  return (
    <>
      {productData ? (
        <>
          <div className={classes.grid_container}>
            <Back />
            <main className={classes.product_details}>
              <Details productData={productData} />
            </main>
            <div className={classes.comment_container}>
              <h2 style={{ marginLeft: "10px" }}>Comments:</h2>
              <Comments />
            </div>
            <footer>All Rights Reserved</footer>
          </div>
        </>
      ) : (
        <h2>No Product Found</h2>
      )}
    </>
  );
}

export default ProductDetails;
