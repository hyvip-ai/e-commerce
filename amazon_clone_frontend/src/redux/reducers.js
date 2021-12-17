import {combineReducers} from 'redux'
import productDetailsReducers from './product_details/productDetailsReducers'
import productReducers from './products/productReducers'

const reducers = combineReducers({
    productList:productReducers,
    productDetail:productDetailsReducers
})

export default reducers