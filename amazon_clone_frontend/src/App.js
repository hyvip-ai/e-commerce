import React from "react";
import Landing from "./pages/Landing";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
     
        <Routes>
        <Route exact path="/" element={<Landing/>} />
   
        <Route exact path="/productdetails/:productId" element={<ProductDetails/>} /></Routes>
    
    </React.Fragment>
  );
}

export default App;
