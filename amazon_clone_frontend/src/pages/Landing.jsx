import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import classes from "../styles/landing.module.css";
function Landing({changePage}) {
  return (
    <div className={classes.grid_container}>
     <Header />
      <main className={classes.products}>
        <ProductList changePage={changePage}/>
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
}

export default Landing;
