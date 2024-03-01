import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { contextUser } from '../context/UserContext';

function GetOrders() {
const [orders,setOrders]=useState()
const {auth}=useContext(contextUser)
console.log(orders);
    useEffect(()=>{
       auth&& axios.get("http://localhost:5000/api/order/user",{headers:{ 
          "Authorization":`Bearer ${auth.token}`  
              }}).then((res)=>{

      setOrders(res.data.data)     
       })  
       },[setOrders,auth])

  return (
    <div style={{textAlign:"center"}}>
   {orders&& orders?.map((order)=>  
   <div style={{marginBottom:"20px"}}>
   <h3>order id:{order._id}</h3>
   <h3>status:{order.status}</h3>
    
   <table  border="2px" >
        <tr>
        <th>
product:
        </th>
quantity
        </tr>

      {order.products.map((prod)=>{
        console.log(prod);
       return <tr>
        <td>{prod.product.title}</td>
        <td>{prod.quantity}</td>
       </tr>
      })}
        
      </table></div>)}
        
    </div>
  )
}

export default GetOrders