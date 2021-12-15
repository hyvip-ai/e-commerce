import React from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import classes from "../styles/landing.module.css";
function Landing() {
  return (
    <div className={classes.grid_container}>
     <Header />
      <main className={classes.products}>
        <ProductList />
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
}

export default Landing;
