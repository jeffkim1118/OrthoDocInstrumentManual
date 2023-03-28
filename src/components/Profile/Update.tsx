import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

export default function Update() {
  const user: any = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    if(!!localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      fetch(`http://localhost:3000/api/users/${user.id}`, {
      method:'DELETE',
      headers: {
        'Authorization': `${token}`
      },
    })
    .then(res => res.json())
    .then(data => {
      localStorage.removeItem('token')
      console.log(data)
      dispatch(logout())
      navigate('/login')
    })
    .catch(error => console.log(error))
    }
    
  }

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
          <button className="delete-account" onClick={handleDelete}>Delete Account</button>
        </div>
    </div>
  );
}
