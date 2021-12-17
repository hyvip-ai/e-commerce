import data from "../data/data.js";

function productsController(req, res) {
  res.status(200).send(data.products);
}
function productsByIdController(req, res) {
  const productId = req.params.productId;
  const productDetails = data.products.find((item) => {
    return item._id === productId;
  });
  if(productDetails){
    res.status(200).send(productDetails);
  }
  else{
      res.status(404).send({message:'Product Not Found'})
  }
}

export { productsController, productsByIdController };
