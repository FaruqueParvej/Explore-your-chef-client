import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { logIn, googleLogIn,githubLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page", location);
  let from = location.state?.from?.pathname || "/";
 
  const googleProvider = new GoogleAuthProvider();
  const githubProvider =new GithubAuthProvider();

  const googleLogInHandler = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogInHandler =()=>{
    githubLogIn(githubProvider)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  

  const logInHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <Form onSubmit={logInHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <Form.Text className="text-muted">
            never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <div className="d-flex flex-column ">
          <Button variant="primary" type="submit">
            Log in
          </Button>
          <Button
            onClick={googleLogInHandler}
            variant="outline-success"
            type="submit"
            className="my-2"
          >
            <FaGoogle className="fs-3"></FaGoogle> Log in with Google
          </Button>
          <Button
            onClick={githubLogInHandler}
            variant="outline-dark"
            type="submit"
          >
            <FaGithub className=" fs-3"></FaGithub> Log in with Github
          </Button>
        </div>
        <br />
        <Form.Text className="text-muted">
          Don't have an account <Link to="/signup">Register</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
