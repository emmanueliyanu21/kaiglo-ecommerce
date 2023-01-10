import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Loader from '../components/Loading'
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "../actions/productAction";

function HomePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  console.log(productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Latest Products</h1>
      {loading ? (
          <Loader />
      ) : (
        <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      )
        }
      
    </Container>
  );
}

export default HomePage;
