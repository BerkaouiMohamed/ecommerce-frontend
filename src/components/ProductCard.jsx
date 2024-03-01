import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { contextCard } from "../context/CardContext";
import { ToastContainer,toast } from "react-toastify";


function ProductCard({ product }) {
  if(product.quantity){

    var quantity=product.quantity
    product=product.product
   }
  const {dispatchCard}=useContext(contextCard)
  const incQuantity=()=>{
    dispatchCard({type:"INCREASE_QUANTITY",payload:{product,quantity}})
  }
  const decQuantity=()=>{
    dispatchCard({type:"DECREASE_QUANTITY",payload:{product,quantity}})
  }
const deleteProduct=()=>{
  dispatchCard({type:"DELETE_PRODUCT",payload:{product}})

}
  const AddToCard=()=>{
    dispatchCard({type:"ADD_TO_CARD",payload:{product,quantity:1}})
    toast("added!");
  }

  return (
    <Card style={{ width: "18rem" ,height:"25rem" }}>
      <Card.Img variant="top" src={`http://localhost:5000/${product.image}`} style={{height:"15rem"}} />
      <Card.Body>
        <Card.Title>{product.title.slice(0,10)} ...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
         {quantity? product.price*quantity:product.price}</Card.Title>
        <Card.Text>{product.description.slice(0,50)}...</Card.Text>
       {!quantity? <Button variant="primary" onClick={AddToCard}>Add to card</Button>
       :<div style={{display:"flex",gap:'10px'}}>
       <Button variant="primary" onClick={incQuantity}>+</Button>
       <p>{quantity}</p>
       <Button variant="primary"onClick={decQuantity}>-</Button>
       <Button variant="primary"onClick={deleteProduct}>X</Button>

</div>
      
      
      }
      </Card.Body>
      <ToastContainer/>
    </Card>
  );
}

export default ProductCard;
