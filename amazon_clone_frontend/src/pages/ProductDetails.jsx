import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../components/Back";
import Comments from "../components/Comments";
import Details from "../components/Details";
import classes from "../styles/productdetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import productDetailsActions from "../redux/product_details/productDetailsActions";
function ProductDetails() {
  const state = useSelector((state) => {
    return state.productDetail;
  });
  const dispatch = useDispatch();
  console.log(state);
  const { productId } = useParams();
  useEffect(() => {
    dispatch(productDetailsActions(productId));
  }, [dispatch,productId]);
  return (
    <>
      {!state.loading ? (
        <>
          <div className={classes.grid_container}>
            <Back />
            <main className={classes.product_details}>
              <Details productData={state.productData} />
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
