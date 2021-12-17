import { PRODUCT_DETAIL, PRODUCT_DETAIL_SUCCESS } from "./constants"

const initialState = {loading:true,productData:{}}
const productDetailsReducers = (state=initialState,action)=>{
    switch(action.type){
        case PRODUCT_DETAIL:
            return {
                ...state,
                loading:true
            }
        case PRODUCT_DETAIL_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                loading:false,
                productData:action.payload
            }
        default:
            return {...state}
    }
}
export default productDetailsReducers