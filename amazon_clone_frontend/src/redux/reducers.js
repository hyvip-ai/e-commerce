import {combineReducers} from 'redux'
import productDetailsReducers from './product_details/productDetailsReducers'
import productReducers from './products/productReducers'
import cartReducers from './cart/cartReducers'

const reducers = combineReducers({
    productList:productReducers,
    productDetail:productDetailsReducers,
    cart:cartReducers
})

export default reducers