import React from "react";
import Landing from "./pages/Landing";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [page, setPage] = React.useState(true);
  return (
    <React.Fragment>{page ? <Landing changePage={setPage}/> : <ProductDetails changePage={setPage}/>}</React.Fragment>
  );
}

export default App;
