import React from "react";
import Landing from "./pages/Landing";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/index'
function App() {
  return (
    <Provider  store={store}>
     
        <Routes>
        <Route exact path="/" element={<Landing/>} />
   
        <Route exact path="/productdetails/:productId" element={<ProductDetails/>} /></Routes>
    
    </Provider>
  );
}

export default App;
