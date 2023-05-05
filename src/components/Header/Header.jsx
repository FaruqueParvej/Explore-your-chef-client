import { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.displayName);
  const [showName, setShowName] = useState(false);
  const handleMouseOver = () => {
    setShowName(true);
  };

  const handleMouseOut = () => {
    setShowName(false);
  };

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
            <Nav className="mx-auto d-flex flex-column flex-lg-row align-items-center">
              <NavLink
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "yellow" : "white",
                  };
                }}
                className=" text-decoration-none mx-3"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "yellow" : "white",
                  };
                }}
                to="/blogs"
                className=" text-decoration-none"
              >
                Blogs
              </NavLink>
            </Nav>
            <Nav>
              <div className="text-white text-center mx-auto px-2">
                {showName && <p>{user?.displayName}</p>}
              </div>
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ width: "40px" }}
                className="text-white text-center mx-auto my-2 my-lg-0"
              >
                {user ? (
                  <img
                    className="rounded-circle img-fluid "
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserAlt style={{ fontSize: "2rem" }}></FaUserAlt>
                )}
              </div>

              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center" >
                {user ? (
                  <Link
                    onClick={logOutHandler}
                    to="/login"
                    className="text-white text-decoration-none "
                  >
                   <Button variant="primary" className="mx-lg-3 my-3 my-lg-0">Log Out</Button> 
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-white text-decoration-none mx-1"
                    >
                      <Button variant="primary" className="mx-lg-3 my-3 my-lg-0">Log In</Button> 
                    </Link>
                    <Link
                      to="/signup"
                      className="text-white text-decoration-none"
                    >
                     <Button variant="primary" >Sign up</Button> 
                    </Link>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
