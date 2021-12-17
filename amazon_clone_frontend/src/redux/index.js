import {createStore} from 'redux'
import productReducers from './products/productReducers'
const store = createStore(productReducers)
export default store