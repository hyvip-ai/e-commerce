import React from 'react'
import productData from '../data/products'
import ProductCard from './ProductCard'
function ProductList() {
    
    return (
        <React.Fragment>
            {
                productData.products.map(item=>{
                   return <ProductCard key={item._id} productData={item} />
                })
            }
        </React.Fragment>
    )
}

export default ProductList
