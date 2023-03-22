import {useState} from 'react';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { selectUser,login } from '../../features/userSlice';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e:any) => {
    e.preventDefault();
    const loggingInUser = {
      username,
      password
    }

    fetch(`http://localhost:3000/login`, {
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(loggingInUser)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      dispatch(login({
        id: data.id,
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        email:data.email,
        loggedIn:true
      })
    )
    })
    navigate('/')
  }
  return (
    <div className="background">
      <div className="login-container" style={{padding:'250px'}}>
        <form
          className="login-form"
          style={{ display: "flex", flexDirection: "column", width: "500px", backgroundColor:'white', margin:'auto',borderRadius:'10px',padding:'35px', boxShadow:'8px 7px 5px 5px black'}}
          onSubmit={(e) => handleLogin(e)}
        >  
            <h1 style={{margin:'auto'}}><em>Login</em></h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
          <Link to={'/signup'} style={{padding:'10px',margin:'auto'}}>Don't have an account?</Link>
          <Link to={'/'} style={{margin:'auto'}}>Forgot your password?</Link>
        </form>
      </div>
    </div>
  );
}