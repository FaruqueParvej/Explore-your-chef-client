import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutHandler = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
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
            <Nav className="mx-auto d-flex flex-column flex-lg-row align-items-center">
              <NavLink
                className="text-white text-decoration-none mx-3"
                to="/"
                
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                
                className="text-white text-decoration-none"
              >
                Blogs
              </NavLink>
            </Nav>
            <Nav >
              <div style={{width:"40px"}} className="text-white text-center mx-auto my-2 my-lg-0">
                {user ? (
              <img className="rounded-circle img-fluid " src={user?.photoURL} alt="" />
                ) : (
                  <FaUserAlt style={{ fontSize: "2rem" }}></FaUserAlt>
                )}
              </div>
              <Button className="mx-lg-3 my-3 my-lg-0" variant="primary">
                {user ? (
                  <Link
                    onClick={logOutHandler}
                    to="/login"
                    className="text-white text-decoration-none "
                  >
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
