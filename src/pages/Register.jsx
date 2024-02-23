import "./pages.css";
import Input from "../components/Input";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hundleRegister from "../utils/register";

function Register() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <ToastContainer />
      <Input name="email" type="email" setUser={setUser} user={user} />
      <Input name="name" type="text" setUser={setUser} user={user} />
      <Input name="password" type="password" setUser={setUser} user={user} />
      <Input name="image" type="file" setUser={setUser} user={user} />

      <Button
        variant="primary"
        onClick={
          !loading ? (e) => hundleRegister(e, user, navigate, setLoading) : null
        }
      >
        submit
      </Button>

      <p>
        allready have an account? <Link to="/login">login!</Link>
      </p>
    </div>
  );
}

export default Register;
