import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="m-3 rounded"
      >
        <Container>
          <Navbar.Brand>Explore Your Chef</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="text-white text-decoration-none px-4">Home </Link>
              <Link to="/blogs" className="text-white text-decoration-none">Blogs</Link>
            </Nav>
            <Nav>
              <Link>Profile</Link>
              <Button variant="primary"><Link to="/login" className="text-white text-decoration-none">Log in</Link></Button>
              <Button variant="primary"><Link to="/signup" className="text-white text-decoration-none">Sign Up</Link></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
