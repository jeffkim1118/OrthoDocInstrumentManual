import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import defaultProfilePicture from "../components/images/account/defaultProfilePicture.png";
import emailIcon from "../components/images/account/icons8-mail-96.png";
import Dashboard from "./Profile/Dashboard";
import Update from "./Profile/Update";
import { Link,Outlet } from "react-router-dom";


export default function Profile() {
  const user: any = useSelector(selectUser);
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
      >
        <img
          src={defaultProfilePicture}
          alt="profile-icon"
          style={{ width: "80px", marginTop: "16%", borderRadius: "50%" }}
        ></img>
        <p>{user.username}</p>
      </div>

      <div className="side-bar">
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link to={'dashboard'}>
                <button className="list-group-item list-group-item-action py-2 ripple">
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Main DashBoard</span>
                </button>
              </Link>
              {/* <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main Dashboard</span>
              </a> */}
              <Link to={'update'}>
                <button className="list-group-item list-group-item-action py-2 ripple">
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Update Profile</span>
                </button>
              </Link>
              
            </div>
          </div>
        </nav>
      </div>


      <div className="user-section">
        <Outlet/>
        
      </div>
    </div>
  );
}
