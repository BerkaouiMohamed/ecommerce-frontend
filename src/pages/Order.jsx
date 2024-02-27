import React, { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { contextCard } from '../context/CardContext'
import { contextUser } from '../context/UserContext'
import axios from 'axios'

function Order() {
    const {card}=useContext(contextCard)
    const {auth}=useContext(contextUser)
    const orderProducts=card.map((prod)=>{
        return {product: prod.product._id,quantity:prod.quantity}
    })
    let totalPrice=0
card.forEach(prod => {
        totalPrice+=  prod.product.price*prod.quantity
    })
    const hundleOrder=()=>{
        axios.post("http://localhost:5000/api/order/",{user:auth._id,products:orderProducts,total:totalPrice})
        .then((res)=>console.log(res))
    }
   

  return (
    <div>
        totalPrice: {totalPrice}




        <Button onClick={hundleOrder} > get order</Button>
    </div>
  )
}

export default Order