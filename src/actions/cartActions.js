import axios from 'axios'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../constant/constant'
export const addToCart= (id , qty)=> async (dispatch , getState)=>{
    
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log("hii",getState())
        dispatch({
            type:ADD_TO_CART, 
            payload:{
                id:data.id,
                title:data.title,
                image:data.image,
                price:data.price,
                qty

            }
        
        })
  localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
    
}

export const removeFromCart = (id) => async (dispatch , getState) =>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}