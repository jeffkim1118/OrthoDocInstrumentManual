import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";


export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    e.preventDefault()

    const newUser = {
      username,
      first_name,
      last_name,
      email,
      password
    }
  
    fetch(`http://localhost:3000/api/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: newUser})
    }).then((response) => response.json())
    .then(data => {localStorage.setItem("token", data.token)
    dispatch(login(data))
    navigate('/profile')
  })
  }


  return (
    <div className="background">
      <div className="signup-container" style={{padding:'220px'}}>
        <form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", flexDirection: "column", width: "500px", backgroundColor:'white', margin:'auto',borderRadius:'10px',padding:'35px', boxShadow:'8px 7px 5px 5px black'}}>
          <h1 style={{margin:'auto'}}>
            <em>Sign Up</em>
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit" >
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
