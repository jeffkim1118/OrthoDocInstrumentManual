import { Button } from "react-bootstrap";
import BForm from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import accountIcon from "../../components/images/account/account.png";
import padLock from "../../components/images/account/padlock.png";
import emailIcon from "../../components/images/account/email.png";
import { Form, Field } from "react-final-form";
import { registerUser } from "../../features/userSlice";

export default function SignUp() {
  const [avatar, setAvatar] = useState<File | any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    const data = new FormData();
    data.append("user[bio]", values.bio || "Your biography goes here...");
    data.append("user[first_name]", values.first_name);
    data.append("user[last_name]", values.last_name);
    data.append("user[email]", values.email);
    data.append("user[password]", values.password);
    data.append("user[username]", values.username);
    data.append("user[avatar]", avatar[0]);
    submitToApi(data);
  };

  const submitToApi = async (data: any) => {
    try{
      const response = await dispatch(registerUser(data));
      console.log(response)
      navigate("/registersuccess")
    }catch(error){console.log(error)}
  };

  let registerFormRef = useRef<any>(null);

  return (
    <div className="background">
      <div className="signup-container">
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
            <>
              <form
                className="signup-form"
                onSubmit={handleSubmit}
                ref={registerFormRef}
              >
                <h1 className="signup-form-heading">
                  <em>Sign Up</em>
                </h1>
                <input
                  type="file"
                  onChange={(e) => setAvatar(e.target.files)}
                ></input>

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
                        <span className="error-msg" >{meta.error}</span>
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
                        <span className="error-msg" data-testid="register-first-name">{meta.error}</span>
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
                        <span className="error-msg" data-testid="register-last-name">{meta.error}</span>
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
                        <span className="error-msg" data-testid="register-username">{meta.error}</span>
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
                        <span className="error-msg" data-testid="register-email">{meta.error}</span>
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
                        <span className="error-msg" data-testid="register-password">{meta.error}</span>
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
              </form>
            </>
          )}
        />
      </div>
    </div>
  );
}
