import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import accountIcon from "../../components/images/account.png";
import padLock from "../../components/images/padlock.png";
import emailIcon from "../../components/images/email.png";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newUser = {
      username,
      first_name,
      last_name,
      email,
      password,
    };

    fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newUser }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        dispatch(login(data));
        navigate("/profile");
      });
  };
  return (
    <div className="background">
      <div className="signup-container" style={{ padding: "220px" }}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            backgroundColor: "white",
            margin: "auto",
            borderRadius: "10px",
            padding: "35px",
            boxShadow: "8px 7px 5px 5px black",
          }}
        >
          <h1 style={{ margin: "auto" }}>
            <em>Sign Up</em>
          </h1>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>First Name</Form.Label>
            <div id="icons">
              <img
                src={accountIcon}
                alt="account-icon"
                style={{ width: "20px", height: "20px", margin: "auto 5px" }}
              ></img>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Last Name</Form.Label>
            <div id="icons">
              <img
                src={accountIcon}
                alt="account-icon"
                style={{ width: "20px", height: "20px", margin: "auto 5px" }}
              ></img>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <div id="icons">
              <img
                src={accountIcon}
                alt="account-icon"
                style={{ width: "20px", height: "20px", margin: "auto 5px" }}
              ></img>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <br />
            <div id="icons">
              <img
                src={emailIcon}
                alt="email-icon"
                style={{ width: "20px", height: "20px", margin: "auto 5px" }}
              ></img>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div id="icons">
              <img
                src={padLock}
                alt="password-icon"
                style={{ width: "20px", height: "20px", margin: "auto 5px" }}
              ></img>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <Link to={"/login"} style={{ padding: "10px", margin: "auto" }}>
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}
