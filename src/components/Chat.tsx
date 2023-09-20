import { useContext } from "react";
import Moment from "moment";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import profileImage from "./images/account/defaultProfilePicture.png";
import { ReactReduxContext } from "react-redux";

export default function Chat({ msg, decodedUser }: any) {
  const user: any = useSelector(selectUser);
  const { store } = useContext(ReactReduxContext);
  const currentUserData = store.getState().user;
  console.log(currentUserData.user.username);
  return (
    <div className="chatbox-container">
      <div
        className={msg.user_id === decodedUser.id ? "mychat" : "otherchat"}
        key={msg.i}
      >
        {/* <img
          src={user.avatar_url}
          alt={profileImage}
          className="chat-profile-avatar"
        ></img> */}

        {currentUserData.user.username === msg.username ? null : (
          <span>{msg.username}</span>
        )}
        <br />
        <span>{msg.content}</span>
        <br />
        <div className="date-time-indicator">
          <span className="msg-time">
            {Moment(msg.created_at).format("h:mm:ss a")}
          </span>
        </div>
      </div>
    </div>
  );
}
