import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="background">
      <div className="login-container" style={{padding:'250px'}}>
        <form
          className="login-form"
          style={{ display: "flex", flexDirection: "column", width: "500px", backgroundColor:'white', margin:'auto',borderRadius:'10px',padding:'35px'}}
        >  
            <h1 style={{margin:'auto'}}><em>Login</em></h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Link to={'/signup'} style={{padding:'10px',margin:'auto'}}>Don't have an account?</Link>
          <Link to={'/'} style={{margin:'auto'}}>Forgot your password?</Link>
        </form>
      </div>
    </div>
  );
}
