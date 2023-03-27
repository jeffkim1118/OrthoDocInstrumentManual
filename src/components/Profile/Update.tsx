import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export default function Update(){
    const user:any = useSelector(selectUser);
    return(
        <div className="update">
            <h1>This is update page</h1>
            <div className="update-form-container">
                <form>
                    <label>{user.first_name}</label>
                    <input placeholder="First Name"></input><br/>
                    <label>{user.last_name}</label>
                    <input placeholder="Last Name"></input><br/>
                    <label>{user.email}</label>
                    <input placeholder="Email"></input><br/>
                    <label>************</label>
                    <input placeholder="Password"></input><br/>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}