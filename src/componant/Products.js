import React,{useEffect} from 'react'
import {useDispatch , useSelector } from 'react-redux'
import {listAllProducts} from '../actions/productActions'
import Loader from '../componant/Loader'
import Message from '../componant/Message'
import { Col, Row, TabContent } from "react-bootstrap";
import ProductPageView from '../View/ProductPageView'
function Products() {
  
    const dispatch = useDispatch()
    const productsList = useSelector(state => state.productList)
    const {loading , error , products} = productsList
    useEffect(()=>{
      dispatch(listAllProducts())
    },[dispatch])
    
  return (
   <>
   
   {
    loading?<Loader/>:error?<Message variant="danger">{error}</Message>:<>

<Row>
          {products.map((product) => {
            return (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <ProductPageView product={product} />
              </Col>
            );
          })}
        </Row>
    </>
   }
   </>
  )
}

export default Products