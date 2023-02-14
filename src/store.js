 import {createStore , applyMiddleware , combineReducers} from 'redux'
 import thunk from "redux-thunk";
 import { composeWithDevTools } from 'redux-devtools-extension'
 import { productListReducer,productDetailReducer } from './reducers/productReducers'
 import {cartReducer} from './reducers/cartReducer'


const reducer = combineReducers({
    productList : productListReducer,
    productDetail : productDetailReducer,
    cart:cartReducer,
})
const data = JSON.parse(localStorage.getItem("cartItems"))
const initialState = {
cart:{cartItems:data}
}
const middleware = [thunk];
 const store = createStore(reducer ,initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;

