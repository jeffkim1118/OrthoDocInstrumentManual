import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Update from "./Update";

export default function Profile() {
  const user: any = useSelector(selectUser);
  const dateString = user?.created_at?.toString() || "";
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid-line">
      <div className="user-section">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="profile-tab"
        >
          <Tab eventKey="profile" title="Profile">
            <div className="user-content">
              <h1>Profile</h1>
              <div className="user-bio">
                {user.avatar ? (
                  <img
                    src={user.avatar_url}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src =
                        "http://www.gravatar.com/avatar/?d=identicon";
                    }}
                    className="user-avatar"
                  ></img>
                ) : null}
                <div className="user-bio-content">
                  <p>
                    {user.bio
                      ? user.bio
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"}
                  </p>
                </div>
              </div>

              <h4>Account Detail</h4>
              <div
                className="user-detail"
              >
                <div className="detail-container">
                  <div className="detail-line-one">
                    <label>First Name</label>
                    <p>&emsp;{user.first_name}</p>

                    <label>Last Name</label>
                    <p>&emsp;{user.last_name}</p>

                    <label>Email</label>
                    <p>&emsp;{user.email}</p>

                    <label>Username</label>
                    <p>&emsp;{user.username}</p>
                  </div>

                  <div className="detail-line-two">
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
            </div>
          </Tab>
          <Tab eventKey="Edit" title="Edit Profile">
            <Update />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
