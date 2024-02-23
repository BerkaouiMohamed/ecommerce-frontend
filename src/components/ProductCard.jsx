import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" ,height:"25rem" }}>
      <Card.Img variant="top" src={product.image} style={{height:"15rem"}} />
      <Card.Body>
        <Card.Title>{product.title.slice(0,10)} ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    {product.price}</Card.Title>
        <Card.Text>{product.description.slice(0,50)}...</Card.Text>
        <Button variant="primary">Add to card</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
