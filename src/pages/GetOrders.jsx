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

      setOrders(res.data)     
       })  
       },[setOrders,auth])
  return (
    <div>
   {/* { orders.map((order)=>  <table>
        <tr>
        <th>
product:
        </th>
quantity
        </tr>

      {order.products.map((prod)=>{
       return <tr>
        {}
       </tr>
      })}
        
      </table>)} */}
        
    </div>
  )
}

export default GetOrders