import React from "react";
import Landing from "./pages/Landing";
import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/index";
import Cart from "./pages/Cart";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/productdetails/:productId"
          element={<ProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:productId" element={<Cart />} />
      </Routes>
    </Provider>
  );
}

export default App;
