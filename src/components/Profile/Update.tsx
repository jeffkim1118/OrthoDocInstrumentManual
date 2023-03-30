import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/userSlice";
import { useState } from "react";

export default function Update() {
  const user: any = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newUsername, setNewUsername] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');


  const handleUpdate = (e:any) => {
    e.preventDefault();

    const updatedUserData = {
      username: newUsername,
      first_name: newFirstName,
      last_name: newLastName,
      password: newPassword,
      email: newEmail,
    }

    const token = localStorage.getItem('token');
    fetch(`http://localhost:3000/api/users/${user.id}`, {
      method:'PATCH',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': `${token}`
      },
      body: JSON.stringify({ user: updatedUserData })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch(login(data))
      navigate('/profile')
    })
  }

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
        <form onSubmit={(e) => handleUpdate(e)}>
          <label>{user.username}</label>
          <input placeholder="Username" type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}></input>
          <br />
          <label>{user.first_name}</label>
          <input placeholder="First Name" type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}></input>
          <br />
          <label>{user.last_name}</label>
          <input placeholder="Last Name" type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}></input>
          <br />
          <label>{user.email}</label>
          <input placeholder="Email" type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
          <br />
          <label>************</label>
          <input placeholder="Password" type="current-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
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
