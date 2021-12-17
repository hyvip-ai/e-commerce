import React from 'react'
import {useLocation,useParams} from 'react-router-dom'
import Back from '../components/Back';
import {useSelector} from 'react-redux'
function Cart() {
    const state = useSelector(state=>state)
    // const dispatch = useDispatch()
    console.log(state)
    const {productId} = useParams();
    const {search} = useLocation();
    const numOfProducts = search.split('=')[1]
    return (
        <React.Fragment>
            <Back />
            <h1>This is The Cart</h1>
            <p>product Id : {productId}</p>
            <p>number of products added to cart : {numOfProducts}</p>
        </React.Fragment>
    )
}

export default Cart
