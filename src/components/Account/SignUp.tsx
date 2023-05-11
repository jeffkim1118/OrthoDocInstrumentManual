import { Button } from "react-bootstrap";
import BForm from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import accountIcon from "../../components/images/account/account.png";
import padLock from "../../components/images/account/padlock.png";
import emailIcon from "../../components/images/account/email.png";
import { Form, Field } from "react-final-form";
import FileField from "./FileField";

export default function SignUp() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");
  const [avatar, setSelectedAvatar] = useState<any | null>(null);
  const [registrationStatus, setRegistrationStatus] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sleep = (ms:any) => new Promise(resolve => setTimeout(resolve, ms))
  
  const onSubmit = (values:any) => {
    
    if(!values.bio){
      values.bio = 'Your biography goes here...'
    }
    
    // await sleep(300)
    fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user:values}),
    })
      .then((response) => response.json())
      .then((data) => {
          // console.log(data.token)
          console.log(data)
          localStorage.setItem("token", data.token);
          dispatch(login(data.user));
          navigate("/profile");
        
      })
      .catch((error) => {
        console.log(error);
        setRegistrationStatus(false);
      });

    console.log(registrationStatus);
  };

  return (
    <div className="background">
      <div className="signup-container" >
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: any = {};
            if (!values.first_name) {
              errors.first_name = "First name required";
            }
            if (!values.last_name) {
              errors.last_name = "Last name required";
            }
            if (!values.email) {
              errors.email = "Email required";
            }
            if (!values.password) {
              errors.password = "Password required";
            }
            if (!values.username) {
              errors.username = "Username required";
            }
            return errors;
          }}
          render={({
            submitError,
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
          }) => (
            <form className="signup-form" onSubmit={handleSubmit}>
              <h1 className="signup-form-heading">
                <em>Sign Up</em>
              </h1>
              <FileField name="avatar" accept="image/*"></FileField>
              {/* <Field name="avatar">
                {({ input, meta }) => (
                  <BForm.Group className="mb-3" controlId="formBasicText">
                    <BForm.Label>Avatar</BForm.Label>
                    <div className="icons">
                      <img src={accountIcon} alt="account-icon"></img>
                      <BForm.Control
                        {...input}
                        type="file"
                        placeholder="Avatar"
                        accept="image/*"
                        className={meta.touched && meta.error ? "error" : ""}
                      />
                    </div>
                    {meta.error && meta.touched && (
                      <span className="error-msg">{meta.error}</span>
                    )}
                  </BForm.Group>
                )}
              </Field> */}
              <Field name="bio">
                {({ input, meta }) => (
                  <BForm.Group className="mb-3" controlId="formBasicText">
                    <BForm.Label>Bio</BForm.Label>
                    <div className="icons">
                      <img src={accountIcon} alt="account-icon"></img>
                      <BForm.Control
                        {...input}
                        type="text"
                        placeholder="Bio is optional"
                        className={meta.touched && meta.error ? "error" : ""}
                      />
                    </div>
                    {meta.error && meta.touched && (
                      <span className="error-msg">{meta.error}</span>
                    )}
                  </BForm.Group>
                )}
              </Field>

              <Field name="first_name">
                {({ input, meta }) => (
                  <BForm.Group className="mb-3" controlId="formBasicText">
                    <BForm.Label>First Name</BForm.Label>
                    <div className="icons">
                      <img src={accountIcon} alt="account-icon"></img>
                      <BForm.Control
                        {...input}
                        type="text"
                        placeholder="First Name"
                        className={meta.touched && meta.error ? "error" : ""}
                      />
                    </div>
                    {meta.error && meta.touched && (
                      <span className="error-msg">{meta.error}</span>
                    )}
                  </BForm.Group>
                )}
              </Field>

              <Field name="last_name">
                {({ input, meta }) => (
                  <BForm.Group className="mb-3" controlId="formBasicText">
                    <BForm.Label>Last Name</BForm.Label>
                    <div className="icons">
                      <img src={accountIcon} alt="account-icon"></img>
                      <BForm.Control
                        {...input}
                        type="text"
                        placeholder="Last Name"
                        className={meta.touched && meta.error ? "error" : ""}
                      />
                    </div>
                    {meta.error && meta.touched && (
                      <span className="error-msg">{meta.error}</span>
                    )}
                  </BForm.Group>
                )}
              </Field>

              <Field name="username">
                {({ input, meta }) => (
                  <BForm.Group className="mb-3" controlId="formBasicEmail">
                    <BForm.Label>Username</BForm.Label>
                    <br />
                    <div className="icons">
                      <img src={accountIcon} alt="email-icon"></img>
                      <BForm.Control
                        {...input}
                        type="text"
                        placeholder="Enter username"
                        className={meta.touched && meta.error ? "error" : ""}
                      ></BForm.Control>
                    </div>
                    {meta.error && meta.touched && (
                      <span className="error-msg">{meta.error}</span>
                    )}
                  </BForm.Group>
                )}
              </Field>

              <Field name="email">
                {({ input, meta }) => (
                  <BForm.Group className="mb-3" controlId="formBasicText">
                    <BForm.Label>Email</BForm.Label>
                    <div className="icons">
                      <img src={emailIcon} alt="account-icon"></img>
                      <BForm.Control
                        {...input}
                        type="email"
                        placeholder="Enter email"
                        className={meta.touched && meta.error ? "error" : ""}
                      ></BForm.Control>
                    </div>
                    {meta.error && meta.touched && (
                      <span className="error-msg">{meta.error}</span>
                    )}
                  </BForm.Group>
                )}
              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <BForm.Group className="mb-3" controlId="formBasicText">
                    <BForm.Label>Password</BForm.Label>
                    <div className="icons">
                      <img src={padLock} alt="account-icon"></img>
                      <BForm.Control
                        {...input}
                        type="password"
                        placeholder="Enter password"
                        className={meta.touched && meta.error ? "error" : ""}
                      ></BForm.Control>
                    </div>
                    {meta.error && meta.touched && (
                      <span className="error-msg">{meta.error}</span>
                    )}
                  </BForm.Group>
                )}
              </Field>

              <div className="buttons">
                <Button
                  className="login-btn"
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Submit
                </Button>
              </div>
              <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
          )}
        />
      </div>
      {/* <div className="signup-container" style={{ padding: "130px" }}>
        <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="signup-form-heading">
            <em>Sign Up</em>
          </h1>
          {!registrationStatus ? <span className="error-msg">Account creation failed. Check your inputs again.</span> : ""}

          <input type="file" name="myImage" onChange={(e:any) => {console.log(e.target.files[0]);setSelectedAvatar(e.target.files[0])}}></input>
          
          <BForm.Group className="mb-3" controlId="formBasicText">     
            <BForm.Label>First Name</BForm.Label>
            <div className="icons">
              <img src={accountIcon} alt="account-icon"></img>
              <BForm.Control
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </BForm.Group>
          <BForm.Group className="mb-3" controlId="formBasicText">
            <BForm.Label>Last Name</BForm.Label>
            <div className="icons">
              <img src={accountIcon} alt="account-icon"></img>
              <BForm.Control
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </BForm.Group>
          <BForm.Group className="mb-3" controlId="formBasicText">
            <BForm.Label>Username</BForm.Label>
            <div className="icons">
              <img src={accountIcon} alt="account-icon"></img>
              <BForm.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></BForm.Control>
            </div>
          </BForm.Group>
          <BForm.Group className="mb-3" controlId="formBasicEmail">
            <BForm.Label>Email address</BForm.Label>
            <br />
            <div className="icons">
              <img src={emailIcon} alt="email-icon"></img>
              <BForm.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></BForm.Control>
            </div>
          </BForm.Group>
          <BForm.Group className="mb-3" controlId="formBasicPassword">
            <BForm.Label>Password</BForm.Label>
            <div className="icons">
              <img src={padLock} alt="password-icon"></img>
              <BForm.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </BForm.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <Link to={"/login"} style={{ padding: "10px", margin: "auto" }}>
            Already have an account?
          </Link>
        </form>
      </div> */}
    </div>
  );
}
