import React from 'react'
import { Card,Button } from "react-bootstrap";
import {priceFormate} from '../utils/PriceFormate'
import {NavLink} from 'react-router-dom'
function ProductPageView({product}) {
  return (
    <>
    
    <Card className='my-3 p-3 rounded'>
      <NavLink to={`/singalProduct/${product.id}`}> 
        <Card.Img src={product.image} variant='top' style={{height:"100px",width:"100px"}} />
        </NavLink>
      <Card.Body>
       
          <Card.Title as='div'>
          <NavLink to={`/singalProduct/${product.id}`}> 
            <strong
              style={{ color: '#000', fontSize: '18px', fontWeight: '600' }}
            >
              {product.title}
            </strong>
            </NavLink>
          </Card.Title>
   

        <Card.Text as='div' style={{ fontSize: '16px', fontWeight: '600' }}>
        <strong
              style={{ color: '#000', fontSize: '16px', fontWeight: '200' }}
            >
              {product.category}
            </strong>
        </Card.Text>

        <Card.Text
          as='h3'
          style={{
            color: '#000',
            fontSize: '20px',
            fontWeight: '600',
            marginTop: '12px',
          }}
        >
          {priceFormate(product.price)}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductPageView