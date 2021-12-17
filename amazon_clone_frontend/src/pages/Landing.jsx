import React, { useEffect } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import ShowError from "../components/ShowError";
import classes from "../styles/landing.module.css";
import { useSelector, useDispatch } from "react-redux";
import getProducts from "../redux/products/productActions";
function Landing() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.productList)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  console.log(state)
  return (
    <React.Fragment>
      <div className={classes.grid_container}>
        <Header />
        <main className={classes.products}>
          {state.loading ? (
            <Loading />
          ) : state.errMessage ? (
            <ShowError errMessage={state.errMessage} variant='danger'/>
          ) : (
            <ProductList products={state.products}/>
          )}
        </main>
        <footer>All Rights Reserved</footer>
      </div>
    </React.Fragment>
  );
}

export default Landing;
