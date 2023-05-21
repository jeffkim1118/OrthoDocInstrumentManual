import Moment from "moment";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import profileImage from "./images/account/defaultProfilePicture.png";

export default function Chat({ msg, decodedUser }: any) {
  const user: any = useSelector(selectUser);

  return (
    <div className="chatbox-container">
      <div
        className={msg.user_id === decodedUser.id ? "mychat" : "otherchat"}
        key={msg.i}
      >
        <img
          src={user.avatar_url? user.avatar_url : profileImage}
          alt="profile-img"
          className="chat-profile-avatar"
        ></img>

        <span>{msg.username}</span>
        <br />
        <span>{msg.content}</span>
        <br />
        <span className="msg-time">
          {Moment(msg.created_at).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
      </div>
    </div>
  );
}
