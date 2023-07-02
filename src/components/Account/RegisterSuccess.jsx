import { Link } from "react-router-dom";

export default function RegisterSuccess(){
    return(
        <div className="registration-success">
            <div className="registration-success-container">
                <p className="registration-success-message">Please check your email to verify your email.</p>
                <Link to={"/login"} className="goto-login-from-registration-success">Go to login page.</Link>
            </div>
        </div>
    )
}