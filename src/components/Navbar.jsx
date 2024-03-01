import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { contextUser } from "../context/UserContext";
import { contextCard } from "../context/CardContext";

function NavigationBar() {
  const { auth, setAuth } = useContext(contextUser);
  const {card}=useContext(contextCard)
  const hundleLogOut = () => {
    setAuth(null);
    localStorage.removeItem("user");
  };
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
            {!auth ? (
              <>
                {" "}
                <Link to={"/login"} className="text-white text-decoration-none">
                  login
                </Link>
                <Link
                  to={"/register"}
                  className="text-white text-decoration-none"
                >
                  register
                </Link>
              </>
            ) : (
              <>
                    <Link
                  to={"/myorders"}
                  className="text-white text-decoration-none"
                >
                  myorders
                </Link>
                {" "}
                {card.length>0?<Link to='/card' className="text-white">card</Link>:null}
                <p onClick={hundleLogOut}>LogOut</p>
                {auth.role==='admin' &&<><Link to={"/allorders"}>usersorders</Link><Link to={"/addproduct"}>addProduct</Link>  </>}
              </>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
