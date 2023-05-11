import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import defaultProfilePicture from "../components/images/account/defaultProfilePicture.png";
import emailIcon from "../components/images/account/icons8-mail-96.png";
import Dashboard from "./Dashboard";
// import Update from "./Update";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const user: any = useSelector(selectUser);
  const dateString = user?.created_at?.toString() || '';
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const outlet: any = document.getElementsByClassName("outletContainer");
  const profile: any = document.getElementsByClassName("user-content");

  useEffect(() => {
    outlet[0].style.display = "none";
  }, []);

  const handleHideProfilePage = () => {
    profile[0].style.display = "none";
    outlet[0].style.display = "block";
  };

  const handleShowProfilePage = () => {
    outlet[0].style.display = "none";
    profile[0].style.display = "block";
  };
  
  return (
    <div className="grid-line">
      <div
        className="profile-picture"
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          backgroundColor: "#FFFDFA",
        }}
        onClick={() => handleShowProfilePage()}
      >
        {user.avatar? <div>user.avatar</div> : null}
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          <img
            src={
              "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="profile-icon"
            style={{
              width: "130px",
              height: "130px",
              marginTop: "7%",
              borderRadius: "50%",
            }}
          ></img>
          <p>{user.username}</p>
        </Link>
      </div>

      <div className="side-bar">
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link to={"dashboard"}>
                <button
                  className="list-group-item list-group-item-action py-2 ripple"
                  onClick={() => handleHideProfilePage()}
                >
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Main DashBoard</span>
                </button>
              </Link>

              <Link to={"update"}>
                <button
                  className="list-group-item list-group-item-action py-2 ripple"
                  onClick={() => handleHideProfilePage()}
                >
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Update Profile</span>
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="user-section">
        <div className="user-content">
          <h1>Profile</h1>
          <div className="user-bio">
            <h3>User Information</h3>
            <p>
              {user.bio ? user.bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"}
            </p>
          </div>

          <h4>Account Detail</h4>
          <div
            className="user-detail"
            style={{ display: "flex", flexDirection: "row", marginTop: "40px" }}
          >
            <div>
              <label>First Name</label>
              <p>&emsp;{user.first_name}</p>

              <label>Last Name</label>
              <p>&emsp;{user.last_name}</p>

              <label>Email</label>
              <p>&emsp;{user.email}</p>

              <label>Username</label>
              <p>&emsp;{user.username}</p>
            </div>

            <div style={{ marginLeft: "20%" }}>
              <label>Password</label>
              <p>&emsp;***********</p>
              
              <label>Access Level</label>
              <p>&emsp; {user.admin === false ? "user" : "admin"}</p>

              <label>Joined</label>
              <time id="user-data">
                <p>&emsp;{formatter.format(Date.parse(dateString))}</p>
              </time>
            </div>
          </div>
        </div>

        <div className="outletContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
