import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import defaultProfilePicture from "./images/defaultProfilePicture.png";
import emailIcon from "../components/images/icons8-mail-96.png";

export default function Profile() {
  const user = useSelector(selectUser);
  const dateString = user.created_at.toString();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="profile-page">
      <div className="profile-grid">
        <div className="profile-image">
          <div className="profile-info">
            <img
              className="profile-picture"
              src={defaultProfilePicture}
              alt="default"
              style={{ padding: "35px" }}
            ></img>
            <div className="profile-picture-data">
              <p id="user-data" style={{ padding: "10px" }}>
                <em>{user.username}</em>
              </p>
            </div>
          </div>
        </div>

        <div className="user-info-container">
          <em id="user-data">
            <h1>Profile</h1>
          </em>
          <p id="user-data">Email: {user.email}</p>
          <p id="user-data">
            First Name: {user.first_name} &nbsp; Last Name: {user.last_name}
          </p>
          <time id="user-data">
            Joined: {formatter.format(Date.parse(dateString))}
          </time>
          <br />
          <a href="">
            <img src={emailIcon} />
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}
