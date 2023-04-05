import { useState } from "react";
import { Button } from "react-bootstrap";
import BForm from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
// import accountIcon from "../../components/images/account/account.png";
// import padLock from "../../components/images/account/padlock.png";
import { Form, Field } from "react-final-form";

export default function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const [verifyUsername, setVerifyUsername] = useState(true);
  // const [verifyPassword, setVerifyPassword] = useState(true);
  // const [invalidAccount, checkAccount] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  // const handleLogin = (e: any) => {
  //   e.preventDefault();
  //   if (username && password) {
  //     const loggingInUser = {
  //       username,
  //       password,
  //     };

  //     fetch(`http://localhost:3000/login`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(loggingInUser),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         localStorage.setItem("token", data.token);
  //         dispatch(login(data.user));
  //         navigate("/profile");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         checkAccount(false);
  //       });
  //   } else if (!username && !password) {
  //     setVerifyUsername(false);
  //     setVerifyPassword(false);
  //   } else if (!username) {
  //     setVerifyUsername(false);
  //   } else if (!password) {
  //     setVerifyPassword(false);
  //   }
  // };

  // const handleBlur = () => {
  //   const usernameInput: any =
  //     document.getElementsByClassName("username-input")[0];
  //   const passwordInput: any =
  //     document.getElementsByClassName("password-input")[0];
  //   if (!usernameInput.value) {
  //     usernameInput.style.border = "1px solid red";
  //     setVerifyUsername(false);
  //   }
  //   if (!passwordInput.value) {
  //     passwordInput.style.border = "1px solid red";
  //     setVerifyPassword(false);
  //   }
  // };

  // const handleFocus = () => {
  //   const usernameInput: any =
  //     document.getElementsByClassName("username-input")[0];
  //   const passwordInput: any =
  //     document.getElementsByClassName("password-input")[0];
  //   if (usernameInput.value) {
  //     usernameInput.style.border = "1px solid black";
  //     setVerifyUsername(true);
  //   }
  //   if (passwordInput.value) {
  //     passwordInput.style.border = "1px solid black";
  //     setVerifyPassword(true);
  //   }
  // };

  const handleSubmit = async (values: any) => {
    await sleep(300);
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        dispatch(login(data.user));
        navigate("/profile");
      })
      .catch((error) => {
        return {error}
      });
  };

  // const mustBeNumber = (value:any) => (isNaN(value) ? "Must be a number" : undefined);
  // const minValue = (min:any) => (value:any) => (isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`);
  // const composeValidators =
  //   (...validators:any) =>
  //   (value:any) =>
  //     validators.reduce(
  //       (error:any, validator:any) => error || validator(value),
  //       undefined
  //     );
  const requiredUsername = (value: any) =>
    value ? undefined : (
      <span className="info-required">Required username</span>
    );
  const requiredPassword = (value: any) =>
    value ? undefined : (
      <span className="info-required">Required password</span>
    );

  return (
    <div className="background">
      <div className="form-container">
        <Form
          onSubmit={handleSubmit}
          render={({
            handleSubmit,
            submitting,
            submitError,
            pristine,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username" validate={requiredUsername}>
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <BForm.Control
                      {...input}
                      className={meta.touched && meta.error ? "error" : ""}
                      type="text"
                      placeholder="Username"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password" validate={requiredPassword}>
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <BForm.Control
                      {...input}
                      className={meta.touched && meta.error ? "error" : ""}
                      type="password"
                      placeholder="Password"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {submitError && <div className="error">{submitError}</div>}
              <div className="buttons">
                <Button type="submit" disabled={submitting || pristine}>
                  Submit
                </Button>
              </div>
              <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
          )}
        />

        {/* <div className="form d-md-flex align-items-center justify-content-between">
          <div className="box-1 mt-md-0 mt-5">
            <img
              src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="login-pic"
              alt="login-pic"
            />
          </div>
          <div className="box-2 d-flex flex-column h-100">
            <div className="mt-5" />
            <form className="login-form" onSubmit={(e) => handleLogin(e)}>
              <h1 style={{  textAlign: "center" }}>
                <em>Login</em>
              </h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              {!invalidAccount ? <p style={{ fontSize: "12px", color:'red', margin:'0px'}}>The account doesn't exist. Please check your username or password.</p> : null}
                <Form.Label style={{ fontSize: "14px", margin:'0px' }}>Username</Form.Label>
                <div className="icons">
                  <img
                    src={accountIcon}
                    alt="account-icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 5px",
                    }}
                  ></img>
                  <Form.Control
                    className="username-input"
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                  ></Form.Control>
                </div>
                {!verifyUsername ? (<p style={{ fontSize: "12px", color:'red' }}>Invalid username</p>) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "14px", margin:'0px' }}>Password</Form.Label>
                <div className="icons">
                  <img
                    src={padLock}
                    alt="password-icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "auto 5px",
                    }}
                  ></img>
                  <Form.Control
                    className="password-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                  />
                </div>
                {!verifyPassword ? (<p style={{ fontSize: "12px", color:'red', margin:'0px',border:'none',padding:'none' }}>Invalid password</p>) : null}
              </Form.Group>
              <Button
                className="login-btn"
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
        </div> */}
      </div>
    </div>
  );
}
