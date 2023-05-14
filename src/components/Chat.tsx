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

        <span>{msg.username}</span>
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
// import { useEffect, useState } from "react";
// import Moment from "moment";
// import profileImage from "./images/account/defaultProfilePicture.png";

// interface Message {
//   id: number;
//   content: string;
//   user_id: number; // Assuming user_id is present in the message object
//   created_at: string; // Assuming created_at is present in the message object
// }

// interface Props {
//   message: Message;
//   decodedUser: any;
// }

// export default function Chat({ message, decodedUser }: Props) {
//   return (
//     <div className="chatbox-container">
//       <div
//         className={message.user_id === decodedUser.id ? "mychat" : "otherchat"}
//         key={message.id}
//       >
//         <img
//           src={profileImage}
//           alt="profile-img"
//           style={{ width: "20px", borderRadius: "10px", margin: "3px" }}
//         ></img>

//         <span>username</span>
//         <br />
//         <span>{message.content}</span>
//         <br />
//         <span className="msg-time">
//           {Moment(message.created_at).format("MMMM Do YYYY, h:mm:ss a")}
//         </span>
//       </div>
//     </div>
//   );
// }
