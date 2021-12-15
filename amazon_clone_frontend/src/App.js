import React from "react";
import Landing from "./pages/Landing";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [page, setPage] = React.useState(false);
  return (
    <React.Fragment>{page ? <Landing /> : <ProductDetails />}</React.Fragment>
  );
}

export default App;
