import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Input(props) {

  
function hundleChange(e){
if(props.name=="name"){
  props.setUser({...props.user,name:e.target.value})
}
if(props.name=="email"){
  props.setUser({...props.user,email:e.target.value})
}
if(props.name=="password"){
  props.setUser({...props.user,password:e.target.value})
}
}

  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">
          {props.name}
        </InputGroup.Text>



        <Form.Control
          onChange={hundleChange}
        
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </>
  );
}

export default Input;
