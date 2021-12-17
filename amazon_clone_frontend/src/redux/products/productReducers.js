import products from '../../data/products'
import { GET_PRODUCTS } from './constants'
const initialState = {}
const productReducers = (state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return {...state,...products}
        default:
            return {...state}
    }
}

export default productReducers