import React from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import getProducts from "../redux/products/productActions";
function ProductList() {
  const productList = useSelector((state) => state.products);
  console.log(productList);
  const dispatch = useDispatch()
  dispatch(getProducts())
  return (
    <React.Fragment>
      {productList.map((item) => {
        return <ProductCard key={item._id} productData={item} />;
      })}
    </React.Fragment>
  );
}

export default ProductList;
