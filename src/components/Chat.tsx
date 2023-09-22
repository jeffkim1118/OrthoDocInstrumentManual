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
  return (
    <div>
      {currentUserData.user.username === msg.username ? null : (
        <span className="chat-user-name">{msg.username}</span>
      )}
      <div className="chatbox-container">
        <div
          className={msg.user_id === decodedUser.id ? "mychat" : "otherchat"}
          key={msg.i}
        >
          <span>{msg.content}</span>
        </div>
      </div>
      <div
        className={
          currentUserData.user.username === msg.username
            ? "date-time-indicator-right"
            : "date-time-indicator-left"
        }
      >
        <span className="msg-time">
          {Moment(msg.created_at).format("h:mm a")}
        </span>
      </div>
    </div>
  );
}
