import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import BForm from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, login, selectUser } from "../../features/userSlice";
import accountIcon from "../../components/images/account/account.png";
import padLock from "../../components/images/account/padlock.png";
import { Form, Field } from "react-final-form";

export default function Login() {
  const [invalidAccount, setInvalidAccount] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values: any) => {
    try {
      const response = await dispatch(handleLogin(values));
      if (!response.payload.error) {
        dispatch(login(response.payload));
        navigate("/profile");
      } else {
        setInvalidAccount(true);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

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
          render={({ handleSubmit, submitError, submitting, pristine }) => (
            <div className="form d-md-flex align-items-center justify-content-between">
              <div className="box-1 mt-md-0 mt-5">
                <img
                  src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  className="login-pic"
                  alt="login-pic"
                />
              </div>
              <div className="box-2 d-flex flex-column h-100">
                <div className="mt-5" />
                <form className="form-display" onSubmit={handleSubmit}>
                  <h1 className="login-title">
                    <em>Login</em>
                  </h1>
                  {invalidAccount ? (
                    <span className="error-msg">
                      Login failed. Please check your username or password
                      again.
                    </span>
                  ) : null}
                  <Field name="username" validate={requiredUsername}>
                    {({ input, meta }) => (
                      <div>
                        <label>Username</label>
                        <div style={{ display: "flex" }}>
                          <img
                            src={accountIcon}
                            alt="account-icon"
                            style={{
                              width: "20px",
                              height: "20px",
                              margin: "auto 5px",
                            }}
                          ></img>
                          <BForm.Control
                            {...input}
                            className={
                              meta.touched && meta.error ? "error" : ""
                            }
                            type="text"
                            placeholder="Username"
                          />
                        </div>
                        {meta.error && meta.touched && (
                          <span className="error-msg">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="password" validate={requiredPassword}>
                    {({ input, meta }) => (
                      <div>
                        <label>Password</label>
                        <div style={{ display: "flex" }}>
                          <img
                            src={padLock}
                            alt="password-icon"
                            style={{
                              width: "20px",
                              height: "20px",
                              margin: "auto 5px",
                            }}
                          ></img>
                          <BForm.Control
                            {...input}
                            className={
                              meta.touched && meta.error ? "error" : ""
                            }
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                        {meta.error && meta.touched && (
                          <span className="error-msg">{meta.error}</span>
                        )}
                      </div>
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
                  <div style={{ textAlign: "center" }}>
                    <Link to={"/signup"}>Don't have an account?</Link>
                    <br />
                    <Link to={"/recover"}>Forgot your password?</Link>
                  </div>
                </form>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
