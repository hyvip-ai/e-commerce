import axios from "axios";
import { GET_PRODCUCT_SUCCESS, GET_PRODUCTS, GET_PRODUCT_FAILURE } from "./constants"

const getProducts =()=> async (dispatch) => {
    dispatch({
        type:GET_PRODUCTS
    })
     axios.get('http://localhost:5000/api/v1/products').then(res=>{
         console.log(res)
         dispatch({
             type:GET_PRODCUCT_SUCCESS,
             payload:res.data
         })
     }).catch(err=>{
         dispatch({
             type:GET_PRODUCT_FAILURE,
             payload:err.message
         })
     })
    
    
}

export default getProducts;