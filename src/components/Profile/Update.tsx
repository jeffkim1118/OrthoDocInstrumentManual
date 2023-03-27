import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export default function Update() {
  const user: any = useSelector(selectUser);

  return (
    <div className="update">
      <div className="update-form-container">
        <h1>Update</h1>
        <form>
          <label>{user.first_name}</label>
          <input placeholder="First Name"></input>
          <br />
          <label>{user.last_name}</label>
          <input placeholder="Last Name"></input>
          <br />
          <label>{user.email}</label>
          <input placeholder="Email"></input>
          <br />
          <label>************</label>
          <input placeholder="Password"></input>
          <br />
          <button type="submit">Update</button>
        </form>  
      </div>
      <div className="delete">
          <h3>Account Delete</h3>
          <p>
            If you delete this account, you will not be able to recover this
            account and you need to create a new account.
          </p>
          <button className="delete-account">Delete Account</button>
        </div>
    </div>
  );
}
