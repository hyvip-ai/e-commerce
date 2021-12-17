import { GET_PRODCUCT_SUCCESS, GET_PRODUCTS, GET_PRODUCT_FAILURE } from './constants'
const initialState = {products:[],loading:true}
const productReducers = (state=initialState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return {...state,loading:true}
        case GET_PRODUCT_FAILURE:
            return {...state,loading:false,errMessage:action.payload}
        case GET_PRODCUCT_SUCCESS:
            console.log("asche")
            return {...state,loading:false,products:action.payload}
        default:
            return {...state}
    }
}

export default productReducers