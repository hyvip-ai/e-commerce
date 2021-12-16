import axios from "axios";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import ShowError from "../components/ShowError";
import classes from "../styles/landing.module.css";
function Landing() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts([...res.data]);
        setLoading((prev) => {
          return !prev;
        });
      })
      .catch((err) => {
        console.log(err)
        setError(err.message);
        setLoading((prev) => {
          return !prev;
        });
      });
  }, []);
  return (
    <React.Fragment>
      <div className={classes.grid_container}>
        <Header />
        <main className={classes.products}>
          {loading ? (
            <Loading />
          ) : error ? (
            <ShowError errMessage={error} variant='danger'/>
          ) : (
            <ProductList products={products} />
          )}
        </main>
        <footer>All Rights Reserved</footer>
      </div>
    </React.Fragment>
  );
}

export default Landing;
