import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    
} from '../constant/constant'

export const listAllProducts = () => async (dispatch,getState)=>{
   try {
    console.log("data",getState())
    dispatch({type:PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('https://fakestoreapi.com/products')
    dispatch({type:PRODUCT_LIST_SUCCESS , payload:data})
    
   } catch (error) {
    dispatch({type:PRODUCT_LIST_FAIL , payload:error.message})
   }
} 

export const listSingalProduct = (id) => async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)

        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:PRODUCT_DETAILS_FAIL, payload:error})   
    }
}
