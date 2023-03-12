import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="background">
      <div className="signup-container" style={{padding:'220px'}}>
        <form style={{ display: "flex", flexDirection: "column", width: "500px", backgroundColor:'white', margin:'auto',borderRadius:'10px',padding:'35px'}}>
          <h1 style={{margin:'auto'}}>
            <em>Sign Up</em>
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Link to={"/login"} style={{ padding:'10px', margin: "auto" }}>
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}
