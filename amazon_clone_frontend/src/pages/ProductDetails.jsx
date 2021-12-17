import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../components/Back";
// import Comments from "../components/Comments";
import Details from "../components/Details";
import classes from "../styles/productdetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import productDetailsActions from "../redux/product_details/productDetailsActions";
import Loading from "../components/Loading";
import ShowError from '../components/ShowError'
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
              {
                state.errMessage?<ShowError errMessage={state.errMessage} variant={'danger'} />:<Details productData={state.productData} />
              }
            </main>
            {/* <div className={classes.comment_container}>
              <h2 style={{ marginLeft: "10px" }}>Comments:</h2>
              <Comments />
            </div> */}
            <footer>All Rights Reserved</footer>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ProductDetails;
