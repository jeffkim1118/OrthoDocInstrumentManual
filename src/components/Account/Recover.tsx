import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Recover() {
  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="background">
      <div className="recover-form-background">
      <div
        className="recover-form-container"
        
      >
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Email required";
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
            <form className="recover-password-form">
              <h3 className="recover-label">Forgot Your Password?</h3>
              <p className="recover-label">Don't fret! Just type in your email and we will <br/><span>send you a code to reset your password!</span></p>
              <Field name="email">
                {({ input, meta }) => (
                  <div className="recover-form">
                    <input
                      {...input}
                      type="email"
                      placeholder="Enter your email"
                      className={meta.touched && meta.error ? "error" : "recover-input"}
                    ></input>
                    <br />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span className="error-msg">
                        {meta.error || meta.submitError}
                      </span>
                    )}
                  </div>
                )}
              </Field>

              <Button
                className="recover-btn"
                type="submit"
                disabled={submitting || pristine}
              >
                Submit
              </Button>
              <div style={{ textAlign: "center" }}>
                <Link to={"/login"}>Go back</Link><br/>
                <Link to={"/signup"}>Don't have an account?</Link>
              </div>
            </form>
          )}
        ></Form>
      </div>
      </div>
    </div>
  );
}
