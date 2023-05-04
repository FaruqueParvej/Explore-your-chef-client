import { useContext } from "react";
import { Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {logIn}=useContext(AuthContext);

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
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div className="w-25 mx-auto my-5">
      <Form onSubmit={logInHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your email" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter your password" />
          <Form.Text className="text-muted">
            never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
        <br />
        <Form.Text className="text-muted">
            Don't have an account <Link to="/signup">Register</Link>
          </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
