import React from 'react'
import ProductCard from './ProductCard'
function ProductList({products}) {
    
    return (
        <React.Fragment>
            {
                products.map(item=>{
                   return <ProductCard key={item._id} productData={item} />
                })
            }
        </React.Fragment>
    )
}

export default ProductList
