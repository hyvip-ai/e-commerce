import React from 'react'
import productData from '../data/products'
import ProductCard from './ProductCard'
function ProductList({changePage}) {
    
    return (
        <React.Fragment>
            {
                productData.products.map(item=>{
                   return <ProductCard key={item._id} productData={item} changePage={changePage}/>
                })
            }
        </React.Fragment>
    )
}

export default ProductList
