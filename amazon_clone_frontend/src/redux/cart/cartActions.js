import { SAVE_ITEM_TO_CART } from "./cosntants"

const cartActions = (product) => {
    return {
        type:SAVE_ITEM_TO_CART,
        payload:product
    }
}

export default cartActions