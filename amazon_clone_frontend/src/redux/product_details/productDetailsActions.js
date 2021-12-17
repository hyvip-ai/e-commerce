import { PRODUCT_DETAIL, PRODUCT_DETAIL_SUCCESS } from "./constants";
import products from "../../data/products";

const productDetailsActions = (productId) => async (dispatch) => {
    dispatch({
        type:PRODUCT_DETAIL
    })

    setTimeout(() => {
        const productData = products.products.find((item) => {
            return item._id === productId;
          });
          dispatch({
              type:PRODUCT_DETAIL_SUCCESS,
              payload:productData
          })
    }, 2000);

};
export default productDetailsActions