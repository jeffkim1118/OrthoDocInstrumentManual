import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import accountIcon from '../../components/images/account/account.png';
import padLock from '../../components/images/account/padlock.png';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginInputStatus, setLoginInputStatus] = useState(Boolean);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (username && password) {
      const loggingInUser = {
        username,
        password,
      };

      fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loggingInUser),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          dispatch(login(data.user));
        });
      setLoginInputStatus(true);
      navigate("/profile");
    } else {
      setLoginInputStatus(false);
    }
  };
  return (
    <div className="background">
      <div className="form-container">
        <div className="form d-md-flex align-items-center justify-content-between">
          <div className="box-1 mt-md-0 mt-5">
            <img
              src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className=""
              alt=""
            />
          </div>
          <div className="box-2 d-flex flex-column h-100">
            <div className="mt-5" />
            <form className="login-form" onSubmit={(e) => handleLogin(e)}>
              <h1 style={{ paddingBottom: "10px", textAlign: "center" }}>
                <em>Login</em>
              </h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: "14px" }}>Username</Form.Label>
                <div className="icons">
                  <img src={accountIcon} alt="account-icon" style={{width:"20px",height:'20px',margin:'auto 5px'}}></img>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ border: "1px solid black" }}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "14px" }}>Password</Form.Label>
                <div className="icons">
                  <img src={padLock} alt="password-icon" style={{width:"20px",height:'20px',margin:'auto 5px'}}></img>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: "1px solid black" }}
                  />
                </div>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "340px",
                }}
              >
                Login
              </Button>
              <br />
              <div style={{ textAlign: "center" }}>
                <Link to={"/signup"}>Don't have an account?</Link>
                <br />
                <Link to={"/"}>Forgot your password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
