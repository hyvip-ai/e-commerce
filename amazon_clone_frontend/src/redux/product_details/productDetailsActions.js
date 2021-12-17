import { PRODUCT_DETAIL, PRODUCT_DETAIL_FAILURE, PRODUCT_DETAIL_SUCCESS } from "./constants";
import axios from "axios";

const productDetailsActions = (productId) => async (dispatch) => {
    dispatch({
        type:PRODUCT_DETAIL
    })

    axios.get(`http://localhost:5000/api/v1/products/${productId}`).then(res=>{
        dispatch({
            type:PRODUCT_DETAIL_SUCCESS,
            payload:res.data
        })
    }).catch(err=>{
        dispatch({
            type:PRODUCT_DETAIL_FAILURE,
            payload:err.response.data.message
        })
    })

};
export default productDetailsActions