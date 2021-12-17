import {combineReducers} from 'redux'
import productReducers from './products/productReducers'

const reducers = combineReducers({
    productList:productReducers
})

export default reducers