import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-dark text-white sticky-top mb-4">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          Mern Ecomerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white flex gap-3  ">
            <Link to={"/"} className="text-white text-decoration-none">
              Home
            </Link>
            <Link to={"/products"} className="text-white text-decoration-none">
              Our Products
            </Link>
            <Link to={"/login"} className="text-white text-decoration-none">
              login
            </Link>
            <Link to={"/register"} className="text-white text-decoration-none">
              register
            </Link>
            <Link className="text-white">cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
