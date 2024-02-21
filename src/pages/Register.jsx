import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./pages.css";
import Input from "../components/Input";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function Register() {
  return (
    <div className="register-container">
      <Input name="email" type="email" />
      <Input name="name" type="text" />
      <Input name="password" type="password" />
      <Input name="image" type="file" />

      <Button variant="primary">submit</Button>

      <p>
        allready have an account? <Link to="/login">login!</Link>
      </p>
    </div>
  );
}

export default Register;
