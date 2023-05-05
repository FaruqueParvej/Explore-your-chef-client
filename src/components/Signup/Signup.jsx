import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
  const { createUser,updateUser } = useContext(AuthContext);
  const [errorMessage,setErrorMessage]=useState("");
  
  
  const registerHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password,photo,name);
    setErrorMessage("")
    createUser(email, password)
      .then((result) => {
        if(result.user){
          updateUser(photo);
          form.reset()

        }      
      })
      .catch((error) => {
        const errorMessage = error.message;
        
        setErrorMessage(errorMessage);
      });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <Form onSubmit={registerHandler}>
      <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your Name" required
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="photo Url" required
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <Form.Text className="text-muted">
            never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept all the policy" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <br />
        <Form.Text className="text-danger">
          {errorMessage}
        </Form.Text>
        <br/>
        <Form.Text className="text-muted">
          Already have an account <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Signup;
