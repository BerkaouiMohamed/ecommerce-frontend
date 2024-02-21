import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./pages.css";
import Input from "../components/Input";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-container">
      <Input name="email" type="email" />

      <Input name="password" type="password" />
      <Button variant="primary">submit</Button>

      <p>
        register from here <Link to="/register">register!</Link>
      </p>
    </div>
  );
}

export default Register;
