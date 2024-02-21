import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Input(props) {
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">
          {props.name}
        </InputGroup.Text>
        <Form.Control
          type={props.type}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </>
  );
}

export default Input;
