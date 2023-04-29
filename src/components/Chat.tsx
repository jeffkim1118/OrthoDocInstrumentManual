import { useEffect, useState } from "react";
import Moment from "moment";
import profileImage from "./images/account/defaultProfilePicture.png";
export default function Chat({ msg, decodedUser }: any) {
  // console.log(new Date(Date.parse(msg.created_at)))
  return (
    <div className="chatbox-container">
      <div
        className={msg.user_id === decodedUser.id ? "mychat" : "otherchat"}
        key={msg.i}
      >
        <img
          src={profileImage}
          alt="profile-img"
          style={{ width: "20px", borderRadius: "10px", margin: "3px" }}
        ></img>

        <span>username</span>
        <br />
        <span>{msg.content}</span>
        <br />
        <span className="msg-time">
          {Moment(msg.created_at).format("MMMM Do YYYY, h:mm:ss a")}
        </span>

        {/* <span className="chat-user">{msg.user}</span>
        <br />
        <span className="user-message">{msg.message}</span>
        <br />
        <span className="user-message-date">{msg.date}</span> */}
      </div>
    </div>
  );
}
