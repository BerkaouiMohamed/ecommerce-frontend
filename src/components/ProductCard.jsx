import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" ,height:"25rem" }}>
      <Card.Img variant="top" src={product.image} style={{height:"15rem"}} />
      <Card.Body>
        <Card.Title>{product.title + "     " + product.price}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Add to card</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
