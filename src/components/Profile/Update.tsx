import { selectUser, updateUser, deleteUser } from "../../features/userSlice";
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
  const [newBio, setNewBio] = useState('');


  const handleUpdate = async (e:any) => {
    e.preventDefault();

    const updatedUserData = {
      username: newUsername || user.username,
      first_name: newFirstName || user.first_name,
      last_name: newLastName || user.last_name,
      password: newPassword || user.password,
      email: newEmail || user.email,
      bio: newBio || user.bio,
    }

    try{
      const response = await dispatch(updateUser(updatedUserData));
      if(!response.payload.error){
        dispatch(login(response.payload))
        navigate('/')
      }else{
        console.log("update failed")
      }
    } catch(error){
      console.log("Update Error:", error);
    }

  }

  const handleDelete = async () => {
    try{
      const response = await dispatch(deleteUser());
      if(!response){
        localStorage.removeItem('token')
        dispatch(logout())
        navigate('/login')
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="update">
      <div className="update-form-container">
        <h1>Update</h1>
        <form onSubmit={(e) => handleUpdate(e)}>
          <label>{user.bio === null ? "Add bio" : user.bio}</label>
          <br/>
          <textarea value={newBio} onChange={(e) => setNewBio(e.target.value)} placeholder="Type in your biography..."></textarea>
          <br/>
          <label>{user.username}</label>
          <input className="updateInput" placeholder="Username" type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}></input>
          <br />
          <label>{user.first_name}</label>
          <input className="updateInput" placeholder="First Name" type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}></input>
          <br />
          <label>{user.last_name}</label>
          <input className="updateInput" placeholder="Last Name" type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}></input>
          <br />
          <label>{user.email}</label>
          <input className="updateInput" placeholder="Email" type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
          <br />
          <label>************</label>
          <input className="updateInput" placeholder="Password" type="current-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
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
