import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";


const Product = ({ product }) => {
  return (
    <>
    
        <Card className="my-3 p-3 rounded product">
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" className="productImg" />
      </a>

      <Card.Body>
        <a >
          <Card.Title as="div" className="productText">
            <strong>{product.title}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating
            value={product.rating?.rate}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
      
    
    </>
    
  );
};

export default Product;
