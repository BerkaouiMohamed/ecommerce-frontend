import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { contextUser } from '../../context/UserContext'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
 function AllOrders() {
    const{auth}= useContext(contextUser)
    const [orders,setOrders]=useState()
    console.log(orders);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/order',{headers:{
        Authorization:`Bearer ${auth.token}`
    }}).then((res)=>{
       setOrders(res.data.data);
    })
  },[auth])
 
  return (
    <table style={{width:'100vw'}}>
        {orders?.map((order)=>{console.log(order);
         return   <tr>
                <td>order n {order._id} </td>
                <td>user n {order.user} </td>
                <td> 
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       products
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {order.products.map((prod)=><Dropdown.Item >{prod.product.title}****{prod.quantity}</Dropdown.Item>)}
     
      </Dropdown.Menu>
    </Dropdown></td>
<td> {order.total} dt</td>
<td> {order.status} </td>
<td><Link to={`/editorder/${order._id}`}><Button>edit</Button></Link></td>
<td><Button>delete</Button></td>

            </tr>
        })}
    </table>
  )
}

export default AllOrders