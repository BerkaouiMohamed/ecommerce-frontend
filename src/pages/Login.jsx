import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./pages.css";
import Input from "../components/Input";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import hundleLogin from "../utils/login";
import { ToastContainer } from "react-toastify";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="login-container">
      <ToastContainer />
      <Input name="email" type="email" user={user} setUser={setUser} />
      <Input name="password" type="password" user={user} setUser={setUser} />
      <Button
        variant="primary"
        onClick={
          !loading ? (e) => hundleLogin(e, user, navigate, setLoading) : null
        }
      >
        submit
      </Button>

      <p>
        register from here <Link to="/register">register!</Link>
      </p>
    </div>
  );
}

export default Login;
