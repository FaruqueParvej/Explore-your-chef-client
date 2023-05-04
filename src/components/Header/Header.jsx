import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="m-3 rounded"
      >
        <Container >
          <Navbar.Brand>Explore Your Chef</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="text-white text-decoration-none px-4">
                Home{" "}
              </Link>
              <Link to="/blogs" className="text-white text-decoration-none">
                Blogs
              </Link>
            </Nav>
            <Nav>
              <p className="text-white">
                <FaUserAlt style={{ fontSize: "2rem" }}></FaUserAlt>
              </p>
              <Button className="mx-3" variant="primary">
                {user ? (
                  <Link to="/login" className="text-white text-decoration-none">
                    Log Out
                  </Link>
                ) : (
                  <Link to="/login" className="text-white text-decoration-none">
                    Log in
                  </Link>
                )}
              </Button>
              <Button variant="primary">
                <Link to="/signup" className="text-white text-decoration-none">
                  Sign Up
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
