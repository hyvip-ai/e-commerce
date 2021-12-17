import data from '../data/data.js'

function productsController(req,res){
    res.status(200).send(data.products)
}

export  {
    productsController 
  
}