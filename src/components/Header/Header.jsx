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
        <Container>
          <Navbar.Brand>Explore Your Chef</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                className="text-white text-decoration-none"
                exact
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                activeClassName="active"
                className="text-white text-decoration-none"
              >
                Blogs
              </NavLink>
            </Nav>
            <Nav>
              <p className="text-white">
                {user ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <FaUserAlt style={{ fontSize: "2rem" }}></FaUserAlt>
                )}
              </p>
              <Button className="mx-3" variant="primary">
                {user ? (
                  <Link
                    onClick={logOutHandler}
                    to="/login"
                    className="text-white text-decoration-none"
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
