import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { useParams, useLocation, NavLink ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { priceFormate } from "../utils/PriceFormate";
import Message from "../componant/Message";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
function CartPage() {
  const { id } = useParams();
  const qty = useLocation().search.split("=")[1];
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const { cartItems } = cartItem;
  const [quality, setQuality] = useState();
  const navigate = useNavigate()
  console.log(quality);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const handaleSubmit = (id) => {
    dispatch(removeFromCart(id));
  };

  

  return (
    <>
      <Row className="mt-5">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <NavLink to="/">Go Back</NavLink>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={2}>
                      <Image
                        style={{ width: "80px", height: "80px" }}
                        src={item.image}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/singalProduct/${item.id}`}
                      >
                        {item.title}
                      </NavLink>
                    </Col>
                    <Col md={2}>{priceFormate(item.price)}</Col>
                    <Col md={2}>
                      <Row>
                        <Col>
                          <Form.Select 
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.id, e.target.value)
                            )
                          }
                          >
                          {[...Array(10).keys()].map((e) => (
                          <option key={e + 1} value={e + 1}>
                            {e + 1}
                          </option>
                        ))}
                        {/* i require 10 value  */}
                          </Form.Select>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => handaleSubmit(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Subtotal ({cartItems.length}) items</h2>
                {priceFormate(
                  cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)
                )}
                <br></br>
                <span style={{color:"red"}}>inc. all taxes</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CartPage;
