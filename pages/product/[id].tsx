import Head from 'next/head'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import Loader from "../../components/Loading";

type IRate = {
  rate: number;
  count: number;
};

type IProduct = {
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Product() {
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(0);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const fetchData = async () => {
      try {
        setLoading(1);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setLoading(0);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [id]);

  const addToCartHandler = () => {};

  return (
    <Container fluid>
       <title> { product?.title } - total-store</title>
        <meta name="description" content={`${product?.title}`} key="sitelinks" />
        <meta property='og:title' content={`${product?.title} - My clothing and equipment store`}  />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      <>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col md={5}>
              <Image
                src={product?.image}
                alt={product?.title}
                fluid
                thumbnail
              />
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Body>
                    <h3>Category: {product?.category}</h3>
                  </Card.Body>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>{product?.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6>Rating: {product?.rating?.rate}</h6>
                  {/* <Rating
                  // value=
                >
                </Rating> */}
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product?.description}
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price: </Col>
                        <Col>
                          <strong>${product?.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status: </Col>
                        <Col>
                          {product?.rating.count ? "In stock" : "Out of stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block"
                        type="button"
                        variant="secondary"
                      >
                        Add To Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </ListGroup>
            </Col>
            <Col md={1}></Col>
          </Row>
        )}
      </>
    </Container>
  );
}
