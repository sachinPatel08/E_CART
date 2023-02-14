import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listSingalProduct } from "../actions/productActions";
import Loader from "../componant/Loader";
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
import { priceFormate } from "../utils/PriceFormate";

function SingalProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listSingalProduct(id));
  }, [dispatch, id]);
  const handalSubmit = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="mt-5">
            <Col md={4}>
              <Image
                src={product.image}
                alt={product.name}
                style={{ height: "400px", width: "400px", padding: "30px" }}
                fluid
              />
            </Col>
            <Col md={3} >
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item style={{ marginTop: "10px" }}>
                  <h6>{product.category}</h6>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: "600",
                    marginTop: "10px",
                  }}
                >
                  {priceFormate(product.price)}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ textAlign: "justify", marginTop: "10px" }}
                >
                  {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col
                        style={{
                          color: "#000",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        Price
                      </Col>
                      <Col>
                        <strong
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          {priceFormate(product.price)}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroupItem>
                    <Row>
                      <Col
                        style={{
                          color: "#000",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        Qty
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <h5
                              onClick={(e) => {
                                if (qty < 10) {
                                  setQty(qty + 1);
                                }
                              }}
                            >
                              +
                            </h5>
                          </Col>
                          <Col>
                            <Button
                              value={qty}
                              style={{ padding: "5px" }}
                              variant="light"
                            >
                              {qty}
                            </Button>
                          </Col>
                          <Col>
                            <h5
                              onClick={(e) => {
                                if (qty > 1) {
                                  setQty(qty - 1);
                                }
                              }}
                            >
                              -
                            </h5>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroup.Item>
                    <Button
                      className="w-100"
                      type="button"
                      style={{ fontSize: "18px", fontWeight: "600" }}
                      onClick={handalSubmit}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default SingalProduct;
