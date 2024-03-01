import axios from "axios";
import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { contextUser } from "../../context/UserContext";

function AddProduct() {
    const [product,setProduct]=useState({

    })
    const{auth}=useContext(contextUser)
const hundleSubmit=()=>{   
    const form = new FormData();
    form.append("title", product.title);
    form.append("description", product.description);
    form.append("price", product.price);
    form.append("image", product.image);

    
for (const [key, value] of form) {
    console.log(`${key}: ${value}\n`);
  }

      axios
        .post("http://localhost:5000/api/product/", 
        form,
          {headers: { "content-type": "multipart/form-data" , Authorization:`Bearer ${auth.token}`}},
        ).then(res=>console.log(res.data))
}
  return (
    <div>
      <Form.Label htmlFor="">title</Form.Label>
      <Form.Control type="text" onChange={(e)=>setProduct({...product,title:e.target.value})} />
      <br/>
      <Form.Label htmlFor="">description</Form.Label>
      <Form.Control type="text"  onChange={(e)=>setProduct({...product,description:e.target.value})} />
      <br/>
      <Form.Label htmlFor="">price</Form.Label>
      <Form.Control type="number" onChange={(e)=>setProduct({...product,price:e.target.value})}/>

      <br/>
      <Form.Label htmlFor="">image</Form.Label>
      <Form.Control type="file" onChange={(e)=>setProduct({...product,image:e.target.files[0]})} />

<button onClick={hundleSubmit}>submit</button>
    </div>
  );
}

export default AddProduct;
